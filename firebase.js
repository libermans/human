document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlParams.entries());
  
    // Initialize Firebase (already done in your HTML file)
    // var database = firebase.database();
  
    // Save the data to Firebase
    database.ref('params/').push(params);
  });