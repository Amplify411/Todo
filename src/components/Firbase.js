// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJTqspSQ0BmYVEV3-woAWrpdB5JQn_A5o",
  authDomain: "login-auth-38f64.firebaseapp.com",
  projectId: "login-auth-38f64",
  storageBucket: "login-auth-38f64.appspot.com",
  messagingSenderId: "869668846456",
  appId: "1:869668846456:web:d92cf0bc9ca999617aa68d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db =getFirestore(app);
export default app;