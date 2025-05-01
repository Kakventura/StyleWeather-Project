// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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

// Função para buscar o tipoLook
const buscarTipoLook = async () => {
  try {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("Erro: Usuário não autenticado.");
      return null;
    }

    const userDoc = doc(db, "usuarios", userId);
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
      return docSnap.data().tipoLook;
    } else {
      console.error("Documento do usuário não encontrado.");
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar tipoLook no Firestore:", error);
    return null;
  }
};

export { app, auth, db, buscarTipoLook };