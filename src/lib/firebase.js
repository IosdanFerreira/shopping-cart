import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEX_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEX_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEX_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEX_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEX_PUBLIC_FIREBASE_APP_ID,
}

initializeApp(firebaseConfig)

const auth = getAuth()
const googleProvider = new GoogleAuthProvider()

export { auth, googleProvider }