importScripts(
  "https://www.gstatic.com/firebasejs/11.1.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/11.1.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAvr3KNT6kGGxD89ZFrwvW4NoEP1Oe6dFg",
  authDomain: "chat-e9g1hj.firebaseapp.com",
  projectId: "chat-e9g1hj",
  storageBucket: "chat-e9g1hj.firebasestorage.app",
  messagingSenderId: "365460274707",
  appId: "1:365460274707:web:97e301f09e88a02f7749e6",
  measurementId: "G-2KJMFHJZG6",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: payload.data.icon,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
