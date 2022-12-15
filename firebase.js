// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyCb0Vc6SV08iH6C6K-fk5kHJtJbVU057PI",
  authDomain: "test-ce673.firebaseapp.com",
  projectId: "test-ce673",
  storageBucket: "test-ce673.appspot.com",
  messagingSenderId: "907924678844",
  appId: "1:907924678844:web:54a74fb03e685c098748b9",
  measurementId: "G-33WRTT7V29"
};

//const app = initializeApp(firebaseConfig);
//const auth = getAuth();
let app;
if(firebase.apps.length===0){
  app=firebase.initializeApp(firebaseConfig);
}else{
  app=firebase.app();
}
const auth = firebase.auth();

//const db = getFirestore();

export {
  auth,
//  db
}
