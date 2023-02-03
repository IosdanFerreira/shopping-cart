import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDRdFcwUPnw0xctIJ34gDoWzziDGKxi1Lc",
  authDomain: "shopping-cart-7aff2.firebaseapp.com",
  projectId: "shopping-cart-7aff2",
};

export const app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig)

const auth = getAuth()
const googleProvider = new GoogleAuthProvider()

export { auth, googleProvider }