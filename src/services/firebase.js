import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

const config = {
  apiKey: "AIzaSyBixT3SfEvOnAjShjS1IHb9n59uwRvftuY",
  authDomain: "chatty-c5438.firebaseapp.com",
  databaseURL: "https://chatty-c5438-default-rtdb.firebaseio.com",
  projectId: "chatty-c5438",
  storageBucket: "chatty-c5438.appspot.com",
  messagingSenderId: "444744363761",
  appId: "1:444744363761:web:29fbaca78608ff53864350",
  measurementId: "G-78CV1ZR72K",
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
