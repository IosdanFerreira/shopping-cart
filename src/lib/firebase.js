import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDRdFcwUPnw0xctIJ34gDoWzziDGKxi1Lc",
    authDomain: "shopping-cart-7aff2.firebaseapp.com",
    projectId: "shopping-cart-7aff2",
    storageBucket: "shopping-cart-7aff2.appspot.com",
    messagingSenderId: "208193646118",
    appId: "1:208193646118:web:632cedf4f2b6fe89f940e7"
  };

initializeApp(firebaseConfig)

const auth = getAuth()
const googleProvider = new GoogleAuthProvider()

export { auth, googleProvider }