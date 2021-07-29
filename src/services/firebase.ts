import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyChCFd_WtHAenykw7iddKSqmGuEhUfKPqo',
  authDomain: 'tcc-fatec-f68c6.firebaseapp.com',
  projectId: 'tcc-fatec-f68c6',
  storageBucket: 'tcc-fatec-f68c6.appspot.com',
  messagingSenderId: '554767531730',
  appId: '1:554767531730:web:45bac282efcd21ac92770b',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();

export { firebase, auth };
