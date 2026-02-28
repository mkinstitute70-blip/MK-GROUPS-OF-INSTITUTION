// 🔥 Firebase CDN imports (module required)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ============================
// 🔥 PASTE YOUR CONFIG HERE
// Firebase Console se milega
// ============================

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXXXX",
  appId: "XXXXXX"
};


// ============================
// INIT
// ============================

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


// ============================
// GLOBAL EXPORT (important)
// ============================

window.db = db;

window.FB = {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  setDoc
};

console.log("🔥 Firebase Connected Successfully");
