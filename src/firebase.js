import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwAEG2MRwDlyO0qyZe5vtFp56LQeZwNQQ",
  authDomain: "twitter-clone-dd1e1.firebaseapp.com",
  databaseURL: "https://twitter-clone-dd1e1.firebaseio.com",
  projectId: "twitter-clone-dd1e1",
  storageBucket: "twitter-clone-dd1e1.appspot.com",
  messagingSenderId: "834517520157",
  appId: "1:834517520157:web:c4d93317e5a765f16b1bf4",
  measurementId: "G-0P6ZWEF517"
};

const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;
