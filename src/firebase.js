import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBOgVNNQX7Z4Tqff4rit-gj3K8rup66ylk",
    authDomain: "portfolio-c364c.firebaseapp.com",
    projectId: "portfolio-c364c",
    storageBucket: "portfolio-c364c.appspot.com", // ✅ FIX ตรงนี้
    messagingSenderId: "876073448378",
    appId: "1:876073448378:web:fd32bbdffb6490c1bc6383",
    measurementId: "G-0F18NG0CZW"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const storage = getStorage(app)
export const analytics = getAnalytics(app)
export { app }
