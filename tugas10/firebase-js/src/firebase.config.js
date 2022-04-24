// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0I1l1QXmo0-xRhHFqdnq-E7esFDq9yfA",
  authDomain: "fir-js-c6a36.firebaseapp.com",
  projectId: "fir-js-c6a36",
  storageBucket: "fir-js-c6a36.appspot.com",
  messagingSenderId: "560975821434",
  appId: "1:560975821434:web:7ed8e27f4c31c2694599c3",
  measurementId: "G-XZQG0Q6P4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);