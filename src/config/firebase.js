// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgmbgkhXsy5RAuNUAQZt1MUAwh7ThjENQ",
  authDomain: "dashboard-21eb9.firebaseapp.com",
  projectId: "dashboard-21eb9",
  storageBucket: "dashboard-21eb9.appspot.com",
  messagingSenderId: "929605471856",
  appId: "1:929605471856:web:924c7854edf2c8f9c32eb5",
  measurementId: "G-SMRSPTR49E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { analytics,auth,firestore}