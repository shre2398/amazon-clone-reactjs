import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDtSOLw1wIgxNKC8111KlCo2-S_HUMouaI',
  authDomain: 'react-amaze-on-clone.firebaseapp.com',
  projectId: 'react-amaze-on-clone',
  storageBucket: 'react-amaze-on-clone.appspot.com',
  messagingSenderId: '517864550819',
  appId: '1:517864550819:web:810141b1cb923d866d2a16',
  measurementId: 'G-192PQEHVNM'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
