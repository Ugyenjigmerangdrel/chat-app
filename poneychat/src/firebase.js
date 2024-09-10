import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "API_kEY",
    authDomain: "________",
    projectId: "________",
    storageBucket: "________",
    messagingSenderId: "________",
    appId: "________",
    measurementId: "________"
  };

// Use this to initialize the firebase App
const firebaseApp =firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();


export default db;
