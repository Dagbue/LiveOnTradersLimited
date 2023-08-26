import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAJeUAz5XEG0Ml3UKlQQfdu9xu6QfrC3JY",
    authDomain: "gtel-cd8b9.firebaseapp.com",
    projectId: "gtel-cd8b9",
    storageBucket: "gtel-cd8b9.appspot.com",
    messagingSenderId: "990882969843",
    appId: "1:990882969843:web:cabe25b15a20a67a41df86"
};

// init firebase
initializeApp(firebaseConfig)





//init firebase auth
const auth = getAuth();

const database = getDatabase();

const db = getFirestore();

const storage = getStorage();



export { auth, db, database, storage}

