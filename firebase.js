import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v9.22.2 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG4JfjVp8RFQbU9dGjOE0OC5AwDHbScrI",
  authDomain: "codergame-c27a0.firebaseapp.com",
  projectId: "codergame-c27a0",
  storageBucket: "codergame-c27a0.appspot.com",
  messagingSenderId: "830425065422",
  appId: "1:830425065422:web:992e35778b24ffb50b2d9f",
  measurementId: "G-5KKHZVJQQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
