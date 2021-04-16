import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDd2zK-UXjAVAph5rCCrhAlKKVIYF9eMRo",
  authDomain: "challenge-92b7c.firebaseapp.com",
  projectId: "challenge-92b7c",
  storageBucket: "challenge-92b7c.appspot.com",
  messagingSenderId: "894884147245",
  appId: "1:894884147245:web:ca2ac572982e726dc888a4",
  measurementId: "G-P39HVZKT8M"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };