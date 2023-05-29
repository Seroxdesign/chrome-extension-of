import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByCeKa6GYGwQj8Eqio3kCW1TH6pU4x5uo",
  authDomain: "auto-f.firebaseapp.com",
  projectId: "auto-f",
  storageBucket: "auto-f.appspot.com",
  messagingSenderId: "306737236438",
  appId: "1:306737236438:web:a3fa5d27427c713bbd3c77",
  measurementId: "G-6F0BV0QQMW"
};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
