// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUHH6pXuYfIzMDXRV4oKkxNejAyBDZy74",
  authDomain: "shinryu-79159.firebaseapp.com",
  projectId: "shinryu-79159",
  storageBucket: "shinryu-79159.firebasestorage.app",
  messagingSenderId: "806374605503",
  appId: "1:806374605503:web:811235c97fdaa409b63c0a",
  measurementId: "G-0VQF5SSXFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);