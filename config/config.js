const requestOptions = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

export { requestOptions };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  authDomain: "coinbase-1ac10.firebaseapp.com",
  projectId: "coinbase-1ac10",
  storageBucket: "coinbase-1ac10.appspot.com",
  messagingSenderId: "204614415031",
  appId: "1:204614415031:web:b64f7f48546c779a2a1332",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export { db };

export { auth };
