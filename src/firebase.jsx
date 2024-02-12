
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC-dpmgW-nxMZ_JUPuhIy_GHXklxJY0tAA",
  authDomain: "chatsphere-3cd45.firebaseapp.com",
  projectId: "chatsphere-3cd45",
  storageBucket: "chatsphere-3cd45.appspot.com",
  messagingSenderId: "933231290232",
  appId: "1:933231290232:web:289c92fb8ad0d1b9968a8d"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db = getFirestore(app);