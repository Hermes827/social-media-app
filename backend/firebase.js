var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyBvnp5tYdKEANfnrkKbbjAmnTUlUeo5fTY",
  authDomain: "social-media-app-284912.firebaseapp.com",
  databaseURL: "https://social-media-app-284912.firebaseio.com",
  projectId: "social-media-app-284912",
  storageBucket: "social-media-app-284912.appspot.com",
  messagingSenderId: "1079680708897",
  appId: "1:1079680708897:web:bac992ad427bfb50a50e60",
  measurementId: "G-9WLSWY8QYS"
};
firebase.initializeApp(firebaseConfig);

module.exports = firebase;
