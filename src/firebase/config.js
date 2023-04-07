import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiK1_U3C0D13VEAJyfk59OBjdUQOe4i4I",
  authDomain: "readinglistapp-66e57.firebaseapp.com",
  projectId: "readinglistapp-66e57",
  storageBucket: "readinglistapp-66e57.appspot.com",
  messagingSenderId: "634861971189",
  appId: "1:634861971189:web:5d7cb4924a03e4085987bc",
};

// init firebase
initializeApp(firebaseConfig);


// init firestore
const db = getFirestore()


export { db }