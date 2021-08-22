import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import * as firebase from 'firebase';
import { useHistory } from 'react-router-dom';
//Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAUw8FcYrXCXFfCDRK4dirbbAPPUVhFNAs",
  authDomain: "online-shop-6ea59.firebaseapp.com",
  projectId: "online-shop-6ea59",
  storageBucket: "online-shop-6ea59.appspot.com",
  messagingSenderId: "445612364503",
  appId: "1:445612364503:web:b3763f8878fa3bdbfe9692",
  measurementId: "G-1GCLKB0QC9"
};
//Firebase initialization
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage();
const fs = firebase
const storageRef = storage.ref();

export { auth, db, storage, fs, storageRef }