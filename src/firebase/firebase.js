import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA91TZlys4KDL2Z7iMX1TgSOblBr8L-Gcs",
  authDomain: "finance-tracker-fc763.firebaseapp.com",
  projectId: "finance-tracker-fc763",
  storageBucket: "finance-tracker-fc763.firebasestorage.app",
  messagingSenderId: "570279466282",
  appId: "1:570279466282:web:ab1cdda80ff8cb8dc5fa53"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);