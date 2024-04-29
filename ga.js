

<script async src="https://www.googletagmanager.com/gtag/js?id=G-B392VBT4QH"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-B392VBT4QH');
</script>

<script type="text/javascript">
    const firebaseConfig = {
      apiKey: "AIzaSyDJrmjk9kzUz_YMGlOEfgUauOTVc-hLHlw",
      authDomain: "human-test-1.firebaseapp.com",
      databaseURL: "https://human-test-1-default-rtdb.firebaseio.com",
      projectId: "human-test-1",
      storageBucket: "human-test-1.appspot.com",
      messagingSenderId: "734408801121",
      appId: "1:734408801121:web:7896d2579b7763673a2320",
      measurementId: "G-B392VBT4QH"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();  // Initializes Firebase Analytics
</script>
<script>
// Assuming Firebase has been initialized already as shown in previous examples
firebase.analytics().logEvent('KUKU_page_view', {
page_path: '/example-path',  // Dynamically set this as needed
page_title: document.title,  // Optionally capture the title of the page
page_location: window.location.href  // Full URL of the page
});
</script>