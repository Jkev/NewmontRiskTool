import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBrY0WiwyOoBJy5u4fLNtegrWjwn_GlBcY",
  authDomain: "tinder-rick.firebaseapp.com",
  projectId: "tinder-rick",
  storageBucket: "tinder-rick.appspot.com",
  messagingSenderId: "641944739210",
  appId: "1:641944739210:web:37b5bb44675cdf41bb3c73",
  measurementId: "G-PWEFP38KRD",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore().collection("favs");

export function getFavsFromFirebase(uid) {
  db.doc(uid)
    .get()
    .then((snap) => {
      return snap.data().array;
    });
}

export function updateDB(array, uid) {
  return db.doc(uid).set({ array });
}

export function signOutGoogle() {
  firebase.auth().signOut();
}

export function loginWithGoogle() {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((snap) => snap.user);
}
