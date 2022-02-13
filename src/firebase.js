import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQtn_Wb3M3v3e2iLOvBA9uA93yb-dP05Q",
  authDomain: "twitter-29713.firebaseapp.com",
  projectId: "twitter-29713",
  storageBucket: "twitter-29713.appspot.com",
  messagingSenderId: "962809528090",
  appId: "1:962809528090:web:42601481a27b3d223bb6a3",
  measurementId: "G-X0CM1XZ518"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);


const db = firebaseApp.firestore();

export default db;