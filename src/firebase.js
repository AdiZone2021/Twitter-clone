import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCKXw2zdW-PSnsr6GTNknXxhkcsSj_7vnA",
  authDomain: "twitter-clone-adi.firebaseapp.com",
  projectId: "twitter-clone-adi",
  storageBucket: "twitter-clone-adi.appspot.com",
  messagingSenderId: "637438922403",
  appId: "1:637438922403:web:41e6c2d9f52737746b3916",
  measurementId: "G-X9X41DJTER"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();

export default db;