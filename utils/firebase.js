import * as firebase from 'firebase';
import 'firebase/auth';

console.log()

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAHxxND7Ps13KT_z1hTdttoweZ46fd0Zns",
    authDomain: "scheduler-native-fb.firebaseapp.com",
    databaseURL: "https://scheduler-native-fb-default-rtdb.firebaseio.com",
    projectId: "scheduler-native-fb",
    storageBucket: "scheduler-native-fb.appspot.com",
    messagingSenderId: "445546373455",
    appId: "1:445546373455:web:cf81d48b9e4cd2945b653a",
    measurementId: "G-JC0BX153SE"
};

firebase.initializeApp(firebaseConfig);

export {firebase};