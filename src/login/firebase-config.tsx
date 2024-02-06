// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBs-ScwCX1skYNR_dSgQwgXdwL4BUPsKT4",
  authDomain: "lighthouse-7010a.firebaseapp.com",
  projectId: "lighthouse-7010a",
  storageBucket: "lighthouse-7010a.appspot.com",
  messagingSenderId: "909244709530",
  appId: "1:909244709530:web:059b59fec44d6127d2fd23",
  measurementId: "G-K6EL7YT6BX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export {app, auth, storage};
