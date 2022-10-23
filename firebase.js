// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7tFu_feFeyrbL5SE024cjofSMH6bSf-g",
  authDomain: "insta-2-a.firebaseapp.com",
  projectId: "insta-2-a",
  storageBucket: "insta-2-a.appspot.com",
  messagingSenderId: "429867587414",
  appId: "1:429867587414:web:aef6230f26b6ab65d928f7"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };