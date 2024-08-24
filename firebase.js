// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirebase, getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDggJoX_cyuAIkAC3NxY4W743FWkisgXQc",
  authDomain: "flashcardsaas-554a2.firebaseapp.com",
  projectId: "flashcardsaas-554a2",
  storageBucket: "flashcardsaas-554a2.appspot.com",
  messagingSenderId: "847213752321",
  appId: "1:847213752321:web:ffb98d7c8d9b554fae5000",
  measurementId: "G-Q4C3GX6EBK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db} 