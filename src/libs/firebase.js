import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBfqs2vXDXKDUxq-B9jNwdevz9SOjVpM3A",
    authDomain: "trivial-6a2f0.firebaseapp.com",
    projectId: "trivial-6a2f0",
    storageBucket: "trivial-6a2f0.appspot.com",
    messagingSenderId: "594592738954",
    appId: "1:594592738954:web:30b093667991191ecb4773",
};

const firebaseApp = initializeApp(firebaseConfig);
export { firebaseApp };
