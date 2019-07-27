import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const config = {
    apiKey: "AIzaSyC_oDI4UKuhpPSOUgemaln6jnY36pUwoKM",
    authDomain: "diploma-shop.firebaseapp.com",
    databaseURL: "https://diploma-shop.firebaseio.com",
    projectId: "diploma-shop",
    storageBucket: "diploma-shop.appspot.com",
    messagingSenderId: "78967399774",
    appId: "1:78967399774:web:f15b91d7ab1fd1fd"
};

firebase.initializeApp(config);

export default firebase;
