import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCn5SjrHrkCMwuGW1axrSdE6e5pmQwLq30",
  authDomain: "tiktok---jornada-237c3.firebaseapp.com",
  projectId: "tiktok---jornada-237c3",
  storageBucket: "tiktok---jornada-237c3.appspot.com",
  messagingSenderId: "871658652565",
  appId: "1:871658652565:web:2104aae3f4243be3f06c9c"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;