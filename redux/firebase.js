// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDjhLi0DdDoHLRUjllATcUzRLfzCPQXUjw",

  authDomain: "point-of-sale-f9cb1.firebaseapp.com",

  projectId: "point-of-sale-f9cb1",

  storageBucket: "point-of-sale-f9cb1.appspot.com",

  messagingSenderId: "283415261080",

  appId: "1:283415261080:web:aea42521665c20c3b105ed",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
