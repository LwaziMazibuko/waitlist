// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, sendEmailVerification, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore }from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCLfO_-JiMm2qEPBinOVvItGR8OUMAelM",
  authDomain: "laani-crypto-exchange.firebaseapp.com",
  databaseURL: "https://laani-crypto-exchange-default-rtdb.firebaseio.com",
  projectId: "laani-crypto-exchange",
  storageBucket: "laani-crypto-exchange.appspot.com",
  messagingSenderId: "809129078525",
  appId: "1:809129078525:web:f6f0703b9ecf7ff0f29894",
  measurementId: "G-RHML5JK10E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

// Enable email verification
auth.useDeviceLanguage(); // Use the device's language for email
