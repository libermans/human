// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { initializeAuth } from          "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { firestore } from     "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getAnalytics } from  "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";

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

const firebaseAuth = initializeAuth(app);
const firebaseFirestore = initializeFirestore();

let recaptchaVerifier;
window.onload = function() {
  recaptchaVerifier = new firebaseAuth.RecaptchaVerifier('recaptcha-container');
  recaptchaVerifier.render();
};

function sendOTP() {
  const phoneNumber = document.getElementById('phone-number').value;
  const appVerifier = recaptchaVerifier;
  firebaseAuth.signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(confirmationResult => {
      window.confirmationResult = confirmationResult;
    }).catch(error => {
      console.error("SMS not sent", error);
    });
}

function verifyOTP() {
  const code = document.getElementById('otp').value;
  confirmationResult.confirm(code).then((result) => {
    const user = result.user;
    console.log("User is authenticated");

    // Log to Firestore
    firebaseFirestore.collection("users").doc(user.uid).set({
      phone: user.phoneNumber,
      signupURL: window.location.href,
      firstVisit: new Date()
    }).then(() => {
      window.location.href = 'home.html';  // Redirect to home page after login
    });
  }).catch((error) => {
    console.error("Incorrect OTP", error);
  });
}
  