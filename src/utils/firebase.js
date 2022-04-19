import firebase from "firebase/compat/app";
import  "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3d1Z7lQWCClS_Tad4xrsENQKgXA51yxI",
  authDomain: "notes-e0ab8.firebaseapp.com",
  projectId: "notes-e0ab8",
  storageBucket: "notes-e0ab8.appspot.com",
  messagingSenderId: "1002715293580",
  appId: "1:1002715293580:web:b9cc275498af1f64f2d8a9",
  measurementId: "G-GXMSHSYJXL"
};

firebase.initializeApp(firebaseConfig);
export const db = getFirestore();
export default firebase;