import firebase from 'firebase/app';
import 'firebase/auth'; // for authentication
import 'firebase/storage'; // for storage
import 'firebase/database'; //for realtime database
import 'firebase/firestore'; //for cloud firestore



const firebaseConfig = {
    apiKey: "AIzaSyAO2BnDRhGj-xdU2slTKIK6AhOipXUp65E",
    authDomain: "whatsapp-clone-bb60e.firebaseapp.com",
    projectId: "whatsapp-clone-bb60e",
    storageBucket: "whatsapp-clone-bb60e.appspot.com",
    messagingSenderId: "456418712585",
    appId: "1:456418712585:web:ec11e0aa01077cd6246cd8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider}
  export default db;