import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBQPcCoxHlSnIReIEEuscSZgPIeEYLZeFI",
  authDomain: "reactfirestore-cd862.firebaseapp.com",
  projectId: "reactfirestore-cd862",
  storageBucket: "reactfirestore-cd862.appspot.com",
  messagingSenderId: "713300445380",
  appId: "1:713300445380:web:eb77a9c831632550532191"
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;
