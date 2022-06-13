// import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
// untuk config authentication
import 'firebase/auth'
// untuk store database
// import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD335PmSrLl4JyHAzGGoenenMcJEjtZnmc",
    authDomain: "todolist-firebase-c9176.firebaseapp.com",
    projectId: "todolist-firebase-c9176",
    storageBucket: "todolist-firebase-c9176.appspot.com",
    messagingSenderId: "998103305424",
    appId: "1:998103305424:web:363098e360d17c6d81a2d5",
    measurementId: "G-6GQV9FJLF7"
  };

  // Initialize Firebase
const configFirebase = initializeApp(firebaseConfig);

export default configFirebase