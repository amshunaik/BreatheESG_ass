// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEYiiS-_SOh6Deim_Sq0FZUTPpLTDU8SI",
  authDomain: "breathe-esg-d5528.firebaseapp.com",
  databaseURL: "https://breathe-esg-d5528-default-rtdb.firebaseio.com",
  projectId: "breathe-esg-d5528",
  storageBucket: "breathe-esg-d5528.appspot.com",
  messagingSenderId: "437188501049",
  appId: "1:437188501049:web:b321540f078737ce66b7e8",
  measurementId: "G-F4JKC50JFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth =getAuth(app);

export {app,auth};