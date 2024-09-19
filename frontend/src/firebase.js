// Import the functions you need from the SDKs you need
// Import only the Firebase services you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHdwIcTqjyOvOLNZvZqqtYfvPAaF7ipSc",
  authDomain: "quickbites-a78a6.firebaseapp.com",
  projectId: "quickbites-a78a6",
  storageBucket: "quickbites-a78a6.appspot.com",
  messagingSenderId: "267287442326",
  appId: "1:267287442326:web:fc46f662b16b9a11ab23b7",
  measurementId: "G-ZQVRGXKR0V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Example for authentication
const db = getFirestore(app);