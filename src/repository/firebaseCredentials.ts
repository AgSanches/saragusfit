import firebase from "firebase";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyC7FbyTfr7mpDFxMX4vmBADpKmLwURHfYY",
  authDomain: "saragus-fit.firebaseapp.com",
  databaseURL: "https://saragus-fit.firebaseio.com",
  projectId: "saragus-fit",
  storageBucket: "saragus-fit.appspot.com",
  messagingSenderId: "1070936397680",
  appId: "1:1070936397680:web:3197a2ce50be0441"
};

firebase.analytics();
firebase.initializeApp(firebaseConfig);

// export utils/refs
export {};
