import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCQhqS7mc-eeMRgXl5FY0v7TkRqF2p5k4g",
  authDomain: "online-ticketing-app.firebaseapp.com",
  databaseURL: "https://online-ticketing-app.firebaseio.com",
  projectId: "online-ticketing-app",
  storageBucket: "online-ticketing-app.appspot.com",
  messagingSenderId: "800611830674",
  appId: "1:800611830674:web:00b3fe5024cdf21e9dcf4b",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
