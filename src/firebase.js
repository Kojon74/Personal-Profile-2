import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfkkzp-RQBuChyMuCP4N2HqosdppQz13A",
  authDomain: "kens-blog.firebaseapp.com",
  projectId: "kens-blog",
  storageBucket: "kens-blog.appspot.com",
  messagingSenderId: "732108258276",
  appId: "1:732108258276:web:078189699cf680e1d125f1",
  measurementId: "G-KENNJ5QRH1",
};

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = app.firestore();
const storage = firebase.storage();

export { auth, db, storage };
