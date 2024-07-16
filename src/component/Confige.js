import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnSAuNqcupg0_mf4hsxqlmvkQi7KKEeYM",
    authDomain: "project-54848.firebaseapp.com",
    projectId: "project-54848",
    storageBucket: "project-54848.appspot.com",
    messagingSenderId: "114746652422",
    appId: "1:114746652422:web:9035fadf9a0202eaa45087",
    measurementId: "G-Q061G0V0NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage }