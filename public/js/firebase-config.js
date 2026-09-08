// public/js/firebase-config.js
const firebaseConfig = {
  apiKey: 'AIza_YOUR_API_KEY_HERE',
  authDomain: 'nautica-aire-libre.firebaseapp.com',
  projectId: 'nautica-aire-libre',
  storageBucket: 'nautica-aire-libre.appspot.com',
  messagingSenderId: '000000000000',
  appId: '1:000000000000:web:0000000000000000'
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
