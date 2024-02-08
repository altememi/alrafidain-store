// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3VKgdUaG18XGQYfBSZxDvFro0CWH3hUM",
  authDomain: "alrafidain-shop.firebaseapp.com",
  projectId: "alrafidain-shop",
  storageBucket: "alrafidain-shop.appspot.com",
  messagingSenderId: "188573925969",
  appId: "1:188573925969:web:d6b7e807a9dd9322d1ae70",
  measurementId: "G-B3S8P7F1WR"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);



export default firebaseApp;