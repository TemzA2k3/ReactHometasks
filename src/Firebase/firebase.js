// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGN08uszupc5RQxDy3pF6S-6YfAS08XEc",
  authDomain: "react-firebase-df84e.firebaseapp.com",
  projectId: "react-firebase-df84e",
  storageBucket: "react-firebase-df84e.appspot.com",
  messagingSenderId: "78147290674",
  appId: "1:78147290674:web:35fb8f146ae9fc37919e2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
