const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
require("firebase/storage");

const firebaseConfig = {
    apiKey: "AIzaSyDegWEin04CVtFAAHHmlhKAUzPGIwd5Gn8",
    authDomain: "facey-f207c.firebaseapp.com",
    databaseURL: "https://facey-f207c.firebaseio.com",
    projectId: "facey-f207c",
    storageBucket: "facey-f207c.appspot.com",
    messagingSenderId: "1080894187609",
    appId: "1:1080894187609:web:a99228899306ce3a2c6948",
    measurementId: "G-VXCVHSDZGC"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {
    firebase,
    db,
    auth,
    storage
}