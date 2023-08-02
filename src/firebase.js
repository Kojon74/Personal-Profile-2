import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBfkkzp-RQBuChyMuCP4N2HqosdppQz13A",
  authDomain: "kens-blog.firebaseapp.com",
  projectId: "kens-blog",
  storageBucket: "kens-blog.appspot.com",
  messagingSenderId: "732108258276",
  appId: "1:732108258276:web:078189699cf680e1d125f1",
  measurementId: "G-KENNJ5QRH1",
});

const auth = getAuth(firebaseApp);
const db = initializeFirestore(firebaseApp, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});
const storage = getStorage(firebaseApp);

export { auth, db, storage };
