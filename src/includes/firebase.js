import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDmKZJfQHYs0AN7YbsO9xrekBzxQCJQVzc",
  authDomain: "music-692b6.firebaseapp.com",
  projectId: "music-692b6",
  storageBucket: "music-692b6.appspot.com",
  messagingSenderId: "963706491627",
  appId: "1:963706491627:web:b6374973a06d9d69c6a4ae",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

const usersCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

export {
  auth,
  db,
  usersCollection,
  songsCollection,
  commentsCollection,
  storage,
};
