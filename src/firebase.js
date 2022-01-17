import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBOwqPLvueM5kxl0E3kMiHqKj-zH-bwEAc",
  authDomain: "challenge-7e3bd.firebaseapp.com",
  projectId: "challenge-7e3bd",
  storageBucket: "challenge-7e3bd.appspot.com",
  messagingSenderId: "544903338034",
  appId: "1:544903338034:web:bf6bee7941a68af2ad842b",
  measurementId: "G-2EDTCQ06BP"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };