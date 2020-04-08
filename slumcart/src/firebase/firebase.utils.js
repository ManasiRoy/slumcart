import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCnaaOZY16birQUkLY1wGA-b4MxiqzOw8A",
    authDomain: "slumcart-db.firebaseapp.com",
    databaseURL: "https://slumcart-db.firebaseio.com",
    projectId: "slumcart-db",
    storageBucket: "slumcart-db.appspot.com",
    messagingSenderId: "659794215318",
    appId: "1:659794215318:web:b45f57716de7bf01ec9db7",
    measurementId: "G-F9TQYQ3GLE"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ promt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase