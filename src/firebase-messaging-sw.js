importScripts("https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js");

firebase.initializeApp(
    {
        apiKey: "AIzaSyCHJaaelphxBH8IKttxCVbTHrobYRMG4BM",
        authDomain: "ejemplo-progra-web.firebaseapp.com",
        projectId: "ejemplo-progra-web",
        storageBucket: "ejemplo-progra-web.appspot.com",
        messagingSenderId: "890056501866",
        appId: "1:890056501866:web:29c5bd5d1d2f8e9731b813"
      }
);

const messaging = firebase.messaging();