import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWHYOrQIzgsryjMuofnZ67uTvE6vWa_98",
    authDomain: "poneychat-5cc89.firebaseapp.com",
    projectId: "poneychat-5cc89",
    storageBucket: "poneychat-5cc89.appspot.com",
    messagingSenderId: "888207157369",
    appId: "1:888207157369:web:ed05f3169c5c9add5f0ca8",
    measurementId: "G-ZCF0X5BVSD"
  };

// Use this to initialize the firebase App
const firebaseApp =firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();


export default db;