import { initializeApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

// TODO: Add SDKs for firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGN08uszupc5RQxDy3pF6S-6YfAS08XEc",
  authDomain: "react-firebase-df84e.firebaseapp.com",
  projectId: "react-firebase-df84e",
  storageBucket: "react-firebase-df84e.appspot.com",
  messagingSenderId: "78147290674",
  appId: "1:78147290674:web:35fb8f146ae9fc37919e2b"
};

// Initialize firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);

