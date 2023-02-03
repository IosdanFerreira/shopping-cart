import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
};

export const app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig)

const auth = getAuth()
const googleProvider = new GoogleAuthProvider()

export { auth, googleProvider }