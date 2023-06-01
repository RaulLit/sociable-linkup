import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZwlfTBJADC2svfIKqzfJ0NMUGQCCr79k",
  authDomain: "sociable-linkup.firebaseapp.com",
  projectId: "sociable-linkup",
  storageBucket: "sociable-linkup.appspot.com",
  messagingSenderId: "952663731596",
  appId: "1:952663731596:web:1f5f382d83344370dcbaa9",
  measurementId: "G-FQZETPKEBE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
