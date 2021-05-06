import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyABIHd7HeQ_SlYKWwUv6Nxu-O0NQ3C-YBQ",
    authDomain: "layapa-e3286.firebaseapp.com",
    projectId: "layapa-e3286",
    storageBucket: "layapa-e3286.appspot.com",
    messagingSenderId: "988361060244",
    appId: "1:988361060244:web:ca19ee8382ed00392e2981"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.db=db;

export default firebase;