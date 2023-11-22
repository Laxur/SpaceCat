// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from 'firebase/firestore';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyDlIDfuyUdTUXTEBA5Yttj5C7h0OOeHOdY",
//     authDomain: "spacecat-dbb8f.firebaseapp.com",
//     projectId: "spacecat-dbb8f",
//     storageBucket: "spacecat-dbb8f.appspot.com",
//     messagingSenderId: "1078591863696",
//     appId: "1:1078591863696:web:acf501d1cc84f02a091115",
//     measurementId: "G-Q1F42NRHLT"
//   };

// // Initialize Firebase
// export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH = getAuth (FIREBASE_APP);
// export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlIDfuyUdTUXTEBA5Yttj5C7h0OOeHOdY",
    authDomain: "spacecat-dbb8f.firebaseapp.com",
    projectId: "spacecat-dbb8f",
    storageBucket: "spacecat-dbb8f.appspot.com",
    messagingSenderId: "1078591863696",
    appId: "1:1078591863696:web:acf501d1cc84f02a091115",
    measurementId: "G-Q1F42NRHLT"
  };

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth (FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
