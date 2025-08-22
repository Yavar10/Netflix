// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7-3tpzFdQWajfcacTv5GynB7WoWCM-xs",
  authDomain: "netflix-clone-1840d.firebaseapp.com",
  projectId: "netflix-clone-1840d",
  storageBucket: "netflix-clone-1840d.appspot.com",
  messagingSenderId: "114841423916",
  appId: "1:114841423916:web:98f1f38f7903471c38c189",
  measurementId: "G-XBLPPHX87B"
};


// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export authentication instance
export const auth = getAuth(app);
