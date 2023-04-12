import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6Q2OW1yGqxh3fnxsi_x7aYsYl2KK4MwI",
    authDomain: "e-commerce-8e15e.firebaseapp.com",
    projectId: "e-commerce-8e15e",
    storageBucket: "e-commerce-8e15e.appspot.com",
    messagingSenderId: "195492531951",
    appId: "1:195492531951:web:ccacac4f7b53cb291e951a",
    measurementId: "G-YM68BPGGSY"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)

   const db= firebaseApp.firestore()

   const auth =firebase.auth()

   export {db, auth}