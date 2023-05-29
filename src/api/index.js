import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyB91Up4kdujdif2E-oAE1rPPhjKjHKA50s",
    authDomain: "react-course-uu.firebaseapp.com",
    projectId: "react-course-uu",
    storageBucket: "react-course-uu.appspot.com",
    messagingSenderId: "164360928581",
    appId: "1:164360928581:web:f2f163ad3685376e9f522c",
    measurementId: "G-3RBFCCTN91"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;