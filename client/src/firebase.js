// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-e5d5d.firebaseapp.com",
    projectId: "mern-estate-e5d5d",
    storageBucket: "mern-estate-e5d5d.appspot.com",
    messagingSenderId: "57816328270",
    appId: "1:57816328270:web:05a36cb9ff0c7b0c3f7b1f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
