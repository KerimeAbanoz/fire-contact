import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGv8rXwsBSSEkFxEtU49L_QFba_hJaUFc",
  authDomain: "contact-app-1a1c9.firebaseapp.com",
  databaseURL: "https://contact-app-1a1c9-default-rtdb.firebaseio.com",
  projectId: "contact-app-1a1c9",
  storageBucket: "contact-app-1a1c9.appspot.com",
  messagingSenderId: "131670663919",
  appId: "1:131670663919:web:6ed4a8a1fa47db0683311a",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
