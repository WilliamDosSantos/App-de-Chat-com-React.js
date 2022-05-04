import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCprELaddITRHdM1geqRRKxPrcK3m_SC1w",
  authDomain: "app-chat-91ed1.firebaseapp.com",
  projectId: "app-chat-91ed1",
  storageBucket: "app-chat-91ed1.appspot.com",
  messagingSenderId: "26579700191",
  appId: "1:26579700191:web:f66ee3cfccf945dd9adc6a",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
