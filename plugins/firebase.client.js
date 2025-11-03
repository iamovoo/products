import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
export default defineNuxtPlugin(()=>{
const firebaseConfig = {
  apiKey: "AIzaSyAHEYXHceIAkOVSPfABTFg6BkyjtmAHMUg",
  authDomain: "dasshingstores-7a5db.firebaseapp.com",
  projectId: "dasshingstores-7a5db",
  storageBucket: "dasshingstores-7a5db.firebasestorage.app",
  messagingSenderId: "526745723599",
  appId: "1:526745723599:web:c0ba8e41cbd19ed9434dba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app) 

return{
  provide:{
    firebaseApp: app,
    db : db
  }
}
})