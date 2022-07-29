// import firebase from "firebase/app";
// import * as firebase from "firebase";
import "firebase/firestore";

import firebase from "firebase";
require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyBAybWmby3SOrbYJQiA8qOkDKY7WyuYZSk",
  authDomain: "music-app-3d71d.firebaseapp.com",
  projectId: "music-app-3d71d",
  storageBucket: "music-app-3d71d.appspot.com",
  messagingSenderId: "546864287630",
  appId: "1:546864287630:web:a2e3226ee15d565928dedf",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
// const projectFirestore = firebase.firestore();

export { firebase };
