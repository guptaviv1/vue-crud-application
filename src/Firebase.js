import firebase from 'firebase'
import 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBNT1kLE2HUiX7qriZERkFCJ1hhd3Sugj4",
  authDomain: "api-project-850016456775.firebaseapp.com",
  databaseURL: "https://api-project-850016456775.firebaseio.com",
  projectId: "api-project-850016456775",
  storageBucket: "api-project-850016456775.appspot.com",
  messagingSenderId: "850016456775",
  appId: "1:850016456775:web:3b47c15e11a9b37f"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase.firestore();