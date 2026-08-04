import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAW72J5WDKPrWZqzvprAC_VApcXCL67vno",
  authDomain: "indotechprogramming-id.firebaseapp.com",
  projectId: "indotechprogramming-id",
  storageBucket: "indotechprogramming-id.firebasestorage.app",
  messagingSenderId: "118173796227",
  appId: "1:118173796227:web:813589b025aca30c3598b6",
  measurementId: "G-RHC58BNQ8C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager(),
  }),
});
export const analytics = getAnalytics(app);

export default app;
