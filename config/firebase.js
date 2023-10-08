// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAJkWZZFxBjQdpo2e3eCcFLOevn9pB_-DY",
  authDomain: "nextadmin-641dd.firebaseapp.com",
  projectId: "nextadmin-641dd",
  storageBucket: "nextadmin-641dd.appspot.com",
  messagingSenderId: "228321812183",
  appId: "1:228321812183:web:2f0313ce71fc69fddd9a92",
  measurementId: "G-QFWY88V2NG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
