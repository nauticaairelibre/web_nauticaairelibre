// public/js/auth.js
const authModule = {
  async loginWithEmail(email, password) {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Error signing in with email/password", error);
      throw error;
    }
  },
  
  async loginWithGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const userCredential = await auth.signInWithPopup(provider);
      return userCredential.user;
    } catch (error) {
      console.error("Error signing in with Google", error);
      throw error;
    }
  },
  
  async registerWithEmail(email, password, displayName) {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      if (userCredential.user) {
        await userCredential.user.updateProfile({
          displayName: displayName
        });
      }
      return userCredential.user;
    } catch (error) {
      console.error("Error registering with email", error);
      throw error;
    }
  },
  
  async logout() {
    try {
      await auth.signOut();
      sessionStorage.removeItem('userRole');
      sessionStorage.removeItem('userBranch');
      window.location.href = '/login';
    } catch (error) {
      console.error("Error logging out", error);
      throw error;
    }
  },
  
  onAuthStateChange(callback) {
    return auth.onAuthStateChanged(async (user) => {
      if (user) {
        // Fetch custom claims to determine role and branch
        try {
          const idTokenResult = await user.getIdTokenResult();
          const role = idTokenResult.claims.role || 'cliente';
          const branch = idTokenResult.claims.branch || null;
          
          sessionStorage.setItem('userRole', role);
          if (branch) {
            sessionStorage.setItem('userBranch', branch);
          }
          
          callback(user, role, branch);
        } catch (error) {
          console.error("Error getting user claims", error);
          callback(user, 'cliente', null);
        }
      } else {
        sessionStorage.removeItem('userRole');
        sessionStorage.removeItem('userBranch');
        callback(null, null, null);
      }
    });
  },
  
  async requireAuth(allowedRoles = []) {
    return new Promise((resolve) => {
      const unsubscribe = auth.onAuthStateChanged(async (user) => {
        unsubscribe(); // Only check once
        
        if (!user) {
          window.location.href = '/login';
          return;
        }
        
        if (allowedRoles.length > 0) {
          try {
            const idTokenResult = await user.getIdTokenResult();
            const role = idTokenResult.claims.role || 'cliente';
            
            if (!allowedRoles.includes(role)) {
              alert('Acceso Denegado. No tienes permisos para ver esta página.');
              window.location.href = '/login';
              return;
            }
          } catch (error) {
            console.error("Error checking role requirements", error);
            window.location.href = '/login';
            return;
          }
        }
        
        resolve(user);
      });
    });
  },
  
  getUserRole() {
    return sessionStorage.getItem('userRole') || 'cliente';
  },
  
  getUserBranch() {
    return sessionStorage.getItem('userBranch');
  },
  
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
  }
};

window.authModule = authModule;
