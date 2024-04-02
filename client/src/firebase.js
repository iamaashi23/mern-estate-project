// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-33dfa.firebaseapp.com",
  projectId: "mern-estate-33dfa",
  storageBucket: "mern-estate-33dfa.appspot.com",
  messagingSenderId: "569678283246",
  appId: "1:569678283246:web:18f44ca4d3aa69156a0eff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);