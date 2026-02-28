import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "PASTE_KEY",
  authDomain: "PASTE_DOMAIN",
  databaseURL: "PASTE_DB",
  projectId: "PASTE_ID",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

window.addNotice = function(text){
  set(ref(db,'notice'), { message: text });
}

onValue(ref(db,'notice'), (snap)=>{
  if(snap.exists()){
    document.getElementById("noticeBox").innerText = snap.val().message;
  }
});
