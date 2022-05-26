import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDqWLYV2W4a2CslqjWx7ohp4fyoyfkkt9o",
    authDomain: "fir-2-cbdf6.firebaseapp.com",
    projectId: "fir-2-cbdf6",
    storageBucket: "fir-2-cbdf6.appspot.com",
    messagingSenderId: "252681861427",
    appId: "1:252681861427:web:9d8eb2b82ed4f6539ea646",
    measurementId: "G-LFM5MKC4Q9"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;