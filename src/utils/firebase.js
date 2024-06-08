// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiLzgtHOVNowFQ9PIuIR_Wk9Ss20xzENw",
  authDomain: "netflixgpt-31e67.firebaseapp.com",
  projectId: "netflixgpt-31e67",
  storageBucket: "netflixgpt-31e67.appspot.com",
  messagingSenderId: "446052493281",
  appId: "1:446052493281:web:70c76e7be4b87c3adf94a0",
  measurementId: "G-RZ1T811DN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();