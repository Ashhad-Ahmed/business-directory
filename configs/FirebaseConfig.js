// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyJ329AEix5AAwX_lDe848q2usdz2kqgE",
  authDomain: "business-directory-10.firebaseapp.com",
  projectId: "business-directory-10",
  storageBucket: "business-directory-10.appspot.com",
  messagingSenderId: "560481790557",
  appId: "1:560481790557:web:6c932742948bce80083bb4",
  measurementId: "G-T0KV9706V1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);




// const analytics = getAnalytics(app);
