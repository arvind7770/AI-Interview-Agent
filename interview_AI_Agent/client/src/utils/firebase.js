
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "finalyearproject-5fadc.firebaseapp.com",
  projectId: "finalyearproject-5fadc",
  storageBucket: "finalyearproject-5fadc.firebasestorage.app",
  messagingSenderId: "14664112017",
  appId: "1:14664112017:web:8e283f5dd29a35d3f2ec30"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}