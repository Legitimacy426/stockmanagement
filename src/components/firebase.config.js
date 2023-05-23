// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBMd8wH2x38b5EqeYX1U8n9wtNcLIVqmJ0",
    authDomain: "kapenguriastore.firebaseapp.com",
    projectId: "kapenguriastore",
    storageBucket: "kapenguriastore.appspot.com",
    messagingSenderId: "689410235770",
    appId: "1:689410235770:web:58f9290e8e53ebbfdecac3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
 
