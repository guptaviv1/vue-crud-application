import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBNT1kLE2HUiX7qriZERkFCJ1hhd3Sugj4",
  authDomain: "api-project-850016456775.firebaseapp.com",
  databaseURL: "https://api-project-850016456775.firebaseio.com",
  projectId: "api-project-850016456775",
  storageBucket: "api-project-850016456775.appspot.com"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;