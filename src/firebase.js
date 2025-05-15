import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjLmWdoohCtUcuq5bQLc_Np0LO1pmFDVA",
  authDomain: "fyp7-c993a.firebaseapp.com",
  databaseURL: "https://fyp7-c993a-default-rtdb.firebaseio.com",
  projectId: "fyp7-c993a",
  storageBucket: "fyp7-c993a.firebasestorage.app",
  messagingSenderId: "217975399768",
  appId: "1:217975399768:web:c19e31fb26e0d50479312d",
  measurementId: "G-EQTHER8RY8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
