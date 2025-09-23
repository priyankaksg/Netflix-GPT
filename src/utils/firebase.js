// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmf7CAJVsx6pWOYMx2WXPczzH2yXODbvA",
  authDomain: "netflixgpt-702b2.firebaseapp.com",
  projectId: "netflixgpt-702b2",
  storageBucket: "netflixgpt-702b2.firebasestorage.app",
  messagingSenderId: "657616012029",
  appId: "1:657616012029:web:4a4559d62bfcc5872ab494",
  measurementId: "G-MKKQ8QTNX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();