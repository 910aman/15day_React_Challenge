import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhh_Ju4Ecxj2fAJiZ5ys9xrXKoyPnUL6s",
  authDomain: "ecommerceproject-423210.firebaseapp.com",
  projectId: "ecommerceproject-423210",
  storageBucket: "ecommerceproject-423210.appspot.com",
  messagingSenderId: "493003783561",
  appId: "1:493003783561:web:8eda5ad53755091007b558",
  measurementId: "G-SD2KD0RZMS"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
