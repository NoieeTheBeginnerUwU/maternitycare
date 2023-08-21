import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC93qJuFR7d1nI8XgIYX9nAcnKMTPcXK88",
  authDomain: "it-projects-3rd-year.firebaseapp.com",
  databaseURL: "https://it-projects-3rd-year-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "it-projects-3rd-year",
  storageBucket: "it-projects-3rd-year.appspot.com",
  messagingSenderId: "969764838603",
  appId: "1:969764838603:web:68bb06830593b4ac91cf4e",
  measurementId: "G-ZMZFBYVM24"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const database = getFirestore(app);
export const realtimeDatabase = getDatabase(app);
export const storage = getStorage(app);



