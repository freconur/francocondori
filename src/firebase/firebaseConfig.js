// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB9TyoiQ0RyZibKB7i8NS5YZT65R7jDUSM",
  authDomain: "myprojects-99ad4.firebaseapp.com",
  projectId: "myprojects-99ad4",
  storageBucket: "myprojects-99ad4.appspot.com",
  messagingSenderId: "904037136542",
  appId: "1:904037136542:web:f5c07b329591306509a38f",
  measurementId: "G-57KCMQKFMS",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
