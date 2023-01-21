import firebase from 'firebase/app'
import 'firebase/auth'

if(!firebase.getApps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEX_PUBLIC_FIREBASE_AUTHDOMAIN,
        projectId: process.env.NEX_PUBLIC_FIREBASE_PROJECT_ID,
    })
}