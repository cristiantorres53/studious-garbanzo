// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvzRHxC1Df4oelCODUj9xkJNLPk2cXkeA",
  authDomain: "project-final-ag.firebaseapp.com",
  projectId: "project-final-ag",
  storageBucket: "project-final-ag.appspot.com",
  messagingSenderId: "293262896399",
  appId: "1:293262896399:web:5e9965f03e7e5e56da627a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


