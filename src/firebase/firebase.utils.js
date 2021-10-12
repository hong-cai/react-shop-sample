import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Config Data
var firebaseConfig = {
	apiKey: "AIzaSyB4Jkicq2R__HdMrgHtqWyW7QTu6KRah2Y",
	authDomain: "react-store-redux-material-ui.firebaseapp.com",
	projectId: "react-store-redux-material-ui",
	storageBucket: "react-store-redux-material-ui.appspot.com",
	messagingSenderId: "619147039767",
	appId: "1:619147039767:web:6b5ae1da9358973d127852",
	measurementId: "G-6N872XYZ9V"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Access to auth module
const authGoogle = firebaseApp.auth();
const authProvider = new firebase.auth.GoogleAuthProvider();



// auth.signInWithEmailAndPassword(email, pass);

// authGoogle.signOut().then(() => {
// 	// Sign-out successful.
// }).catch((error) => {
// 	// An error happened.
// });


export { firebaseApp, authGoogle, authProvider };