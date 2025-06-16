// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZYAEBuUwiRbb0ZFokq_LlP-lUtx73eGE",
    authDomain: "prepai-70c8a.firebaseapp.com",
    projectId: "prepai-70c8a",
    storageBucket: "prepai-70c8a.firebasestorage.app",
    messagingSenderId: "158342064023",
    appId: "1:158342064023:web:4fdd7971c7aee5352306d2",
    measurementId: "G-ZNVGQTQKPQ"
};

// Initialize Firebase
const app =!getApps.length? initializeApp(firebaseConfig):getApp();
export const auth=getAuth(app);
export const db=getFirestore(app);