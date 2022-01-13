import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBTnttxBJGKeik0H16U3oLIVLpspMz9gD4",
  authDomain: "voter-project-e7705.firebaseapp.com",
  databaseURL: "https://voter-project-e7705-default-rtdb.firebaseio.com",
  projectId: "voter-project-e7705",
  storageBucket: "voter-project-e7705.appspot.com",
  messagingSenderId: "828457433929",
  appId: "1:828457433929:web:75d88eba25517e5ca53898",
  measurementId: "G-G7XPC9EZ13"
};

firebase.initializeApp(firebaseConfig);


export default firebase.database();