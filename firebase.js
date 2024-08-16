import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQjCLIhkkXzZRsx2hP7sqpqkTaqBGiQYU",
  authDomain: "riyan-inventory-app.firebaseapp.com",
  projectId: "riyan-inventory-app",
  storageBucket: "riyan-inventory-app.appspot.com",
  messagingSenderId: "156352032937",
  appId: "1:156352032937:web:994ad34d459b0240ea39b8",
  measurementId: "G-WE5BR57LR1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const firestore = getFirestore(app)

export {firestore}