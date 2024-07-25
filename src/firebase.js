// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "blogger-hunt-6bb0a.firebaseapp.com",
  projectId: "blogger-hunt-6bb0a",
  storageBucket: "blogger-hunt-6bb0a.appspot.com",
  messagingSenderId: "559155617252",
  appId: "1:559155617252:web:8c66f2cd657bd489eabbf1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);