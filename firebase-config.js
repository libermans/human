// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { auth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { firestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCr_sGI-JPbFLRbuG7OthNLT9ukvgkMQns",
    authDomain: "human-test-1.firebaseapp.com",
    projectId: "human-test-1",
    storageBucket: "human-test-1.appspot.com",
    messagingSenderId: "734408801121",
    appId: "1:734408801121:web:7896d2579b7763673a2320",
    measurementId: "G-B392VBT4QH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = auth();
const firestore = firestore();
  