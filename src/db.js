import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyBz8ASYCgOcJHBg9Ywl4f9ZoQdj8-EIgeM",
    authDomain: "firevuechat-acfae.firebaseapp.com",
    projectId: "firevuechat-acfae",
    storageBucket: "firevuechat-acfae.appspot.com",
    messagingSenderId: "705951930362",
    appId: "1:705951930362:web:fef8aa6c0ef73769007643"
}

const db = firebase.initializeApp(config);
export default db;