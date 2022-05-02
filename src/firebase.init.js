// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0ffz8dBFn5zHFkJ-0gnyM6l-zdlmPTlo",
  authDomain: "walton-warehouse.firebaseapp.com",
  projectId: "walton-warehouse",
  storageBucket: "walton-warehouse.appspot.com",
  messagingSenderId: "594899033764",
  appId: "1:594899033764:web:cdaa6231e29d8aa971d031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth