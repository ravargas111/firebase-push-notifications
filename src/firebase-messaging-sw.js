importScripts("https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js");

firebase.initializeApp(
    {
        apiKey: "",
        authDomain: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
      }
);

const messaging = firebase.messaging();