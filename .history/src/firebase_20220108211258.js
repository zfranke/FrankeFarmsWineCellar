import firebase from "firebase/app";
import "firebase/firestore";

let config = {
  apiKey: "AIzaSyCwlNy4fwFN2wG8k7ew4wjGVYR5WyDExwc",
  authDomain: "frankefarmswinecellar.firebaseapp.com",
  projectId: "frankefarmswinecellar",
  storageBucket: "frankefarmswinecellar.appspot.com",
  messagingSenderId: "452616404449",
  appId: "1:452616404449:web:e30b4e0659616f1bf1a6a0",
  measurementId: "G-084DC8W381"
};

firebase.initializeApp(config);

export default firebase.firestore();