// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBTjOJ74k8wT53OUO5qtS-j-gz-1X_n-hM',
  authDomain: 'berapa-lui.firebaseapp.com',
  databaseURL:
    'https://berapa-lui-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'berapa-lui',
  storageBucket: 'berapa-lui.appspot.com',
  messagingSenderId: '320219574410',
  appId: '1:320219574410:web:da1e928e4c30c4f124bd73',
  measurementId: 'G-WK7CMWQK8V',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const firebaseDbInstance = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const firebaseAuthInstance = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();

// (async () => {
//   try {
//     const docRef = await addDoc(collection(db, 'users'), {
//       first: 'Ada',
//       last: 'Lovelace',
//       born: 1815,
//     });
//     console.log('Document written with ID: ', docRef.id);
//   } catch (e) {
//     console.error('Error adding document: ', e);
//   }
// })();

// export default app;
