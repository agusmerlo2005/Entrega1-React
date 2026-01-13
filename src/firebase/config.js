import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAi8b8GZWpUkIDP7UzXl-ATDVsRVsAUL7c",
  authDomain: "tiendapro-react.firebaseapp.com",
  projectId: "tiendapro-react",
  storageBucket: "tiendapro-react.firebasestorage.app",
  messagingSenderId: "326555439192",
  appId: "1:326555439192:web:9ec2924b7f069ce063fa2d",
  measurementId: "G-5ESF9THXF2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Esta línea exporta la conexión