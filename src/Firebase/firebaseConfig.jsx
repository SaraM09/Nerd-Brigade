// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCy310RXCsb10t4Z-Bs42t_0dOG6ORyWE",
  authDomain: "nerd-brigade-c632d.firebaseapp.com",
  projectId: "nerd-brigade-c632d",
  storageBucket: "nerd-brigade-c632d.appspot.com",
  messagingSenderId: "59959870165",
  appId: "1:59959870165:web:ef784face711e31979985c",
  measurementId: "G-BNHN0ZDGRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;