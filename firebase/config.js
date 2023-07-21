import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAIa44A5G1KyguLlFTjXJuuZfrVAu2K-is",
  authDomain: "goit-react-native-hw-89e13.firebaseapp.com",
  projectId: "goit-react-native-hw-89e13",
  storageBucket: "goit-react-native-hw-89e13.appspot.com",
  messagingSenderId: "984294799945",
  appId: "1:984294799945:web:a4efd13887574c55869d98",
  measurementId: "G-CMMHR1882G",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
