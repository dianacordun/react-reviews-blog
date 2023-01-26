import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWWN8X-0qTYQj68-KyS6DTAAkqySMWIdY",
  authDomain: "book-review-app-ce6d5.firebaseapp.com",
  projectId: "book-review-app-ce6d5",
  storageBucket: "book-review-app-ce6d5.appspot.com",
  messagingSenderId: "524940727",
  appId: "1:524940727:web:5b56087731a39dda7ea432"
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 