// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2LQjxsxQnjv1Yfail-880SOthIAdhSCc",
  authDomain: "styleweather-b939f.firebaseapp.com",
  projectId: "styleweather-b939f",
  storageBucket: "styleweather-b939f.firebasestorage.app",
  messagingSenderId: "992057056774",
  appId: "1:992057056774:web:8cc9acdd7b2997c4c22d87",
  measurementId: "G-3G4J5XZ0TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export const fetchTipoLook = async (userId) => {
  const db = getFirestore();
  const docRef = doc(db, "usuarios", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().tipoLook;
  } else {
    throw new Error("Usuário não encontrado no banco de dados.");
  }
};

export { app, auth, db };