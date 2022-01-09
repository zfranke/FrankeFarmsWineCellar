
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/functions'; 
import 'firebase/compat/firestore';
import 'firebase/compat/analytics'; 
import "firebase/compat/performance";
import "firebase/compat/storage";
import 'firebase/compat/app-check';




const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCwlNy4fwFN2wG8k7ew4wjGVYR5WyDExwc",
  authDomain: "frankefarmswinecellar.firebaseapp.com",
  projectId: "frankefarmswinecellar",
  storageBucket: "frankefarmswinecellar.appspot.com",
  messagingSenderId: "452616404449",
  appId: "1:452616404449:web:e30b4e0659616f1bf1a6a0",
  measurementId: "G-084DC8W381"
});

// Initialize Firebase
const auth = firebaseApp.auth();

const storage = firebaseApp.storage();

const db = firebaseApp.firestore();

const analytics = firebaseApp.analytics();

const functions = firebaseApp.functions();

const perf = firebaseApp.performance();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, db, analytics, functions, perf, googleProvider, storage };