
import { initializeApp } from "firebase/app";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACX_mwI6s2pC3Tm0yXgRBpxu9XFnMx-aE",
  authDomain: "gifexpertapp-4abe5.firebaseapp.com",
  projectId: "gifexpertapp-4abe5",
  storageBucket: "gifexpertapp-4abe5.appspot.com",
  messagingSenderId: "560350462980",
  appId: "1:560350462980:web:e0513a112e0001d56ee151"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;