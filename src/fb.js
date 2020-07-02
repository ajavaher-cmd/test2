// Your web app's Firebase configuration
import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyAVeMnz_nr59IPhn36CMociE_JOtEv6p4Q",
    authDomain: "test1-543cc.firebaseapp.com",
    databaseURL: "https://test1-543cc.firebaseio.com",
    projectId: "test1-543cc",
    storageBucket: "test1-543cc.appspot.com",
    messagingSenderId: "695650559804",
    appId: "1:695650559804:web:145b24f44a04e0f0eaa039",
    measurementId: "G-MN5TBDBPVK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  const db=firebase.firestore();

  db.settings({timestampsInSnapshots:true});

  export default db;