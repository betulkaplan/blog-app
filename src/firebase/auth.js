import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCrNZYd0mTppOMNxdqHk04u6H1Zr9JTeOw',
  authDomain: 'blog-app-d0c9b.firebaseapp.com',
  databaseURL: 'https://blog-app-d0c9b-default-rtdb.firebaseio.com',
  projectId: 'blog-app-d0c9b',
  storageBucket: 'blog-app-d0c9b.appspot.com',
  messagingSenderId: '386132212113',
  appId: '1:386132212113:web:885b1eb29eb10e53ee4230',
  // ...
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const createUser = async (email, password, displayName) => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
    const currentUser = firebase.auth().currentUser;
    currentUser.updateProfile({ displayName: displayName });
  } catch (error) {
    alert('aldready in use');
  }
};

export const loginUser = async (email, password) => {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};

export const userObserver = async (setCurrentUser) => {
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
      // ...
    } else {
      setCurrentUser(null);
    }
  });
};

export const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

export default firebaseApp;
