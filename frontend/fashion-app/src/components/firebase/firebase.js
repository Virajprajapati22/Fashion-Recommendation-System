// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_Epezou4dWz_Lz3nc1aga8VDQg8gxhdk",
    authDomain: "m-fashion-app.firebaseapp.com",
    projectId: "m-fashion-app",
    storageBucket: "m-fashion-app.appspot.com",
    messagingSenderId: "559771876418",
    appId: "1:559771876418:web:fb9c1d8a3db0a5a70501db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword };