import firebase from 'firebase/compat/app'; // Update import to use compatibility version
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJTF_e4_iOHPugQ7iEcyrlh7dIiP4XDLk",
    authDomain: "athlete-zero.firebaseapp.com",
    projectId: "athlete-zero",
    storageBucket: "athlete-zero.appspot.com",
    messagingSenderId: "1011741384221",
    appId: "1:1011741384221:web:bb7baded2c1cf9a39230f4"
  };

// Check if Firebase is already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  // Export Firestore instance
  const firestore = firebase.firestore();
  export default firestore;
  