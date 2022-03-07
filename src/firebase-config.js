// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB04leKZGf0zgn626osP9rTte2MssV9Nng",
  authDomain: "finalproject-a6128.firebaseapp.com",
  projectId: "finalproject-a6128",
  storageBucket: "finalproject-a6128.appspot.com",
  messagingSenderId: "1038158513706",
  appId: "1:1038158513706:web:904452c1b62e8270e0a553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();