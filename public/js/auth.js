// public/js/auth.js — Roles from Firestore (no Cloud Functions needed)
const authModule = {
  // Super Administrador único del sistema
  SUPER_ADMIN_EMAIL: 'arriolapablo.a@gmail.com',

  // Verifica si el correo corresponde exactamente al Super Administrador
  isSuperAdmin(email) {
    return Boolean(email && email.trim().toLowerCase() === this.SUPER_ADMIN_EMAIL.toLowerCase());
  },

  // Sign in with email and password
  async loginWithEmail(email, password) {
    try {
      const cred = await auth.signInWithEmailAndPassword(email, password);
      return cred.user;
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  },

  // Sign in with Google popup
  async loginWithGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const cred = await auth.signInWithPopup(provider);
      // Create Firestore profile if first time
      await this._ensureUserProfile(cred.user);
      return cred.user;
    } catch (error) {
      console.error('Error signing in with Google:', error);
      throw error;
    }
  },

  // Register with email, password, and name
  async registerWithEmail(email, password, displayName) {
    try {
      const cred = await auth.createUserWithEmailAndPassword(email, password);
      if (cred.user) {
        await cred.user.updateProfile({ displayName: displayName });
        // Únicamente arriolapablo.a@gmail.com puede registrarse como admin
        const isAdminUser = this.isSuperAdmin(email);
        await db.collection('users').doc(cred.user.uid).set({
          email: email.trim().toLowerCase(),
          displayName: displayName,
          role: isAdminUser ? 'admin' : 'cliente',
          branch: isAdminUser ? 'todas' : null,
          phone: '',
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          lastLogin: firebase.firestore.FieldValue.serverTimestamp()
        });
      }
      return cred.user;
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    }
  },

  // Sign out and redirect
  async logout() {
    try {
      await auth.signOut();
      sessionStorage.removeItem('userRole');
      sessionStorage.removeItem('userBranch');
      window.location.href = '/login';
    } catch (error) {
      console.error('Error logging out:', error);
      throw error;
    }
  },

  // Listen to auth state and fetch role from Firestore
  onAuthStateChange(callback) {
    return auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const role = await this._fetchRole(user.uid, user.email);
          const branch = await this._fetchBranch(user.uid);
          sessionStorage.setItem('userRole', role);
          if (branch) sessionStorage.setItem('userBranch', branch);
          callback(user, role, branch);
        } catch (error) {
          console.error('Error fetching user role:', error);
          callback(user, 'cliente', null);
        }
      } else {
        sessionStorage.removeItem('userRole');
        sessionStorage.removeItem('userBranch');
        callback(null, null, null);
      }
    });
  },

  // Route guard: check auth + role, redirect if unauthorized
  async requireAuth(allowedRoles = []) {
    return new Promise((resolve) => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        unsubscribe();

        if (!user) {
          window.location.href = '/login';
          return;
        }

        // Si la ruta requiere admin, verificar estrictamente que sea arriolapablo.a@gmail.com
        if (allowedRoles.includes('admin') && !this.isSuperAdmin(user.email)) {
          console.warn('Acceso denegado: solo el super administrador puede acceder a esta área.');
          alert('Acceso Denegado. Solo el Administrador principal (arriolapablo.a@gmail.com) tiene permisos para ingresar.');
          await auth.signOut();
          window.location.href = '/login';
          return;
        }

        if (allowedRoles.length > 0) {
          try {
            const role = await this._fetchRole(user.uid, user.email);
            sessionStorage.setItem('userRole', role);

            if (!allowedRoles.includes(role)) {
              alert('Acceso Denegado. No tenés permisos para ver esta página.');
              window.location.href = '/login';
              return;
            }
          } catch (error) {
            console.error('Error checking role:', error);
            window.location.href = '/login';
            return;
          }
        }

        resolve(user);
      });
    });
  },

  // Get cached role
  getUserRole() {
    return sessionStorage.getItem('userRole') || 'cliente';
  },

  // Get cached branch
  getUserBranch() {
    return sessionStorage.getItem('userBranch');
  },

  // Get current user display info
  getCurrentUserInfo() {
    const user = auth.currentUser;
    if (!user) return null;
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || 'Usuario',
      photoURL: user.photoURL,
      role: this.getUserRole(),
      branch: this.getUserBranch()
    };
  },

  // --- Private helpers ---

  // Fetch role from Firestore users collection
  async _fetchRole(uid, userEmail = null) {
    try {
      const doc = await db.collection('users').doc(uid).get();
      if (doc.exists) {
        const data = doc.data() || {};
        const role = data.role || 'cliente';
        const email = (userEmail || data.email || (auth.currentUser ? auth.currentUser.email : '') || '').toLowerCase();

        // Si un documento tuviera 'admin' pero el email no es arriolapablo.a@gmail.com, se bloquea a 'cliente'
        if (role === 'admin' && !this.isSuperAdmin(email)) {
          console.warn(`Seguridad: el usuario ${email} no es Super Admin. Degradando a rol 'cliente'.`);
          return 'cliente';
        }
        return role;
      }
      return 'cliente';
    } catch (error) {
      console.error('Error reading user role:', error);
      return 'cliente';
    }
  },

  // Fetch branch from Firestore users collection
  async _fetchBranch(uid) {
    try {
      const doc = await db.collection('users').doc(uid).get();
      if (doc.exists) {
        return doc.data().branch || null;
      }
      return null;
    } catch (error) {
      return null;
    }
  },

  // Ensure user profile exists in Firestore (for Google sign-in)
  async _ensureUserProfile(user) {
    try {
      const docRef = db.collection('users').doc(user.uid);
      const doc = await docRef.get();
      const isAdminUser = this.isSuperAdmin(user.email);

      if (!doc.exists) {
        await docRef.set({
          email: (user.email || '').toLowerCase(),
          displayName: user.displayName || '',
          role: isAdminUser ? 'admin' : 'cliente',
          branch: isAdminUser ? 'todas' : null,
          phone: '',
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          lastLogin: firebase.firestore.FieldValue.serverTimestamp()
        });
      } else {
        const updateData = {
          lastLogin: firebase.firestore.FieldValue.serverTimestamp()
        };
        // Si es el Super Admin y no tiene rol admin, sincronizarlo
        if (isAdminUser && doc.data().role !== 'admin') {
          updateData.role = 'admin';
          updateData.branch = 'todas';
        }
        await docRef.update(updateData);
      }
    } catch (error) {
      console.error('Error ensuring user profile:', error);
    }
  }
};

window.authModule = authModule;
