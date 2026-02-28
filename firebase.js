/* =========================================
   MK CLOUD SYSTEM - FINAL FIREBASE VERSION
   All Devices Sync | Admin Powers | No localStorage
   ========================================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


/* =========================
   🔴 PASTE YOUR CONFIG HERE
   ========================= */
const firebaseConfig = {
  apiKey: "PASTE_HERE",
  authDomain: "PASTE_HERE",
  projectId: "PASTE_HERE",
  storageBucket: "PASTE_HERE",
  messagingSenderId: "PASTE_HERE",
  appId: "PASTE_HERE"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


/* =========================
   Disable old localStorage
   ========================= */
window.DATA_R = [];
window.DATA_G = [];
window.DATA_N = [];
window.DATA_S = [];


/* =========================
   HALL OF FAME
   ========================= */
window.saveResult = async function () {
  if (!rn.value || !rr.value) return;

  await addDoc(collection(db, "hall"), {
    name: rn.value,
    rank: rr.value
  });

  rn.value = "";
  rr.value = "";

  loadHall();
};

async function loadHall() {
  const snap = await getDocs(collection(db, "hall"));

  DATA_R = [];
  snap.forEach(d => DATA_R.push(d.data()));

  renderResults();
}


/* =========================
   GALLERY
   ========================= */
window.saveGallery = async function () {
  if (!adm_img.value) return;

  await addDoc(collection(db, "gallery"), { url: adm_img.value });

  adm_img.value = "";

  loadGallery();
};

async function loadGallery() {
  const snap = await getDocs(collection(db, "gallery"));

  DATA_G = [];
  snap.forEach(d => DATA_G.push(d.data().url));

  renderGallery();
}


/* =========================
   NOTICE
   ========================= */
window.saveNotice = async function () {
  if (!adm_not.value) return;

  await addDoc(collection(db, "notice"), {
    msg: adm_not.value,
    date: new Date().toLocaleDateString()
  });

  adm_not.value = "";

  loadNotice();
};

async function loadNotice() {
  const snap = await getDocs(collection(db, "notice"));

  DATA_N = [];
  snap.forEach(d => DATA_N.push(d.data()));

  renderNotices();
}


/* =========================
   STUDENTS / FEES
   ========================= */
window.saveStudent = async function () {
  if (!sn.value || !si.value) return;

  await addDoc(collection(db, "students"), {
    n: sn.value,
    i: si.value.toUpperCase(),
    p: sp.value,
    t: st.value
  });

  ['sn','si','sp','st'].forEach(x =>
    document.getElementById(x).value = ""
  );
};


/* =========================
   LOAD EVERYTHING ON START
   ========================= */
window.addEventListener("load", () => {
  loadHall();
  loadGallery();
  loadNotice();
});
