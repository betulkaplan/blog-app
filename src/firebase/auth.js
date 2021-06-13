import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/firebase-storage';

import { useHistory } from 'react-router-dom';

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
export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const createUser = async (email, password, displayName, photo) => {
  console.log(
    'sırasıyla gelene değerler:',
    'email:',
    email,
    'password:',
    password,
    'name:',
    displayName,
    'photo:',
    photo
  );
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
    currentUser.updateProfile({ displayName: displayName, photoURL: photo });
  } catch (error) {
    alert('aldready in use');
  }
};

export const loginUser = async (email, password, directToHome) => {
  await firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      directToHome();
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert('Could not sign in ');
    });
};

export const userObserver = async (setCurrentUser) => {
  await firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUser(user);
      console.log('OBSERVER OLUM ÇALIŞTI');
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

/* DATABASE PART */

export const addPost = (post) => {
  const postRef = firebase.database().ref('posts');
  postRef.push(post);
};

export const deleteHandler = (id) => {
  const postRef = firebase.database().ref('posts').child(id);
  postRef.remove();
};

export const editHandler = (info) => {
  const postRef = firebase.database().ref('posts').child(info.id);
  postRef.update(info);
};

export default firebase;
