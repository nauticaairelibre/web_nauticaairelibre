// public/js/firebase-config.js
const firebaseConfig = {
  apiKey: 'AIzaSyBZ5tG8PczT-AuwfeK-Vvmngig6-T_6Hcg',
  authDomain: 'nautica-aire-libre.firebaseapp.com',
  projectId: 'nautica-aire-libre',
  storageBucket: 'nautica-aire-libre.firebasestorage.app',
  messagingSenderId: '664667784948',
  appId: '1:664667784948:web:a823c882604988361dc0a1'
};

// Initialize Firebase App
firebase.initializeApp(firebaseConfig);

// Initialize Services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage ? firebase.storage() : null;

// Make globally available
window.firebaseConfig = firebaseConfig;
window.auth = auth;
window.db = db;
window.storage = storage;
