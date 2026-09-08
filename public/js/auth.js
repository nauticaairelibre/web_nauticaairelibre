// public/js/auth.js — Roles from Firestore (no Cloud Functions needed)
const authModule = {

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
        // Create Firestore profile with default role
        await db.collection('users').doc(cred.user.uid).set({
          email: email,
          displayName: displayName,
          role: 'cliente',
          branch: null,
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
          const role = await this._fetchRole(user.uid);
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

        if (allowedRoles.length > 0) {
          try {
            const role = await this._fetchRole(user.uid);
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
  async _fetchRole(uid) {
    try {
      const doc = await db.collection('users').doc(uid).get();
      if (doc.exists) {
        return doc.data().role || 'cliente';
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
      if (!doc.exists) {
        await docRef.set({
          email: user.email,
          displayName: user.displayName || '',
          role: 'cliente',
          branch: null,
          phone: '',
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          lastLogin: firebase.firestore.FieldValue.serverTimestamp()
        });
      } else {
        await docRef.update({
          lastLogin: firebase.firestore.FieldValue.serverTimestamp()
        });
      }
    } catch (error) {
      console.error('Error ensuring user profile:', error);
    }
  }
};

window.authModule = authModule;
