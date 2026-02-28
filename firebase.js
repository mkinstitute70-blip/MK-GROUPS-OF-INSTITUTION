import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAUbxlce-AurocYx2qQ9DW_wwFI4VTHCl0",
  authDomain: "mk-group-c27c9.firebaseapp.com",
  projectId: "mk-group-c27c9",
  storageBucket: "mk-group-c27c9.firebasestorage.app",
  messagingSenderId: "789213760789",
  appId: "1:789213760789:web:e54db27b65b8b488ba2d1c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
