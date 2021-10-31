import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDoc,
  setDoc,
  addDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7CpmEQgbobpCVQuLxKIR7j8EN4W4nkyc",
  authDomain: "crown-db-5ed80.firebaseapp.com",
  projectId: "crown-db-5ed80",
  storageBucket: "crown-db-5ed80.appspot.com",
  messagingSenderId: "781571197611",
  appId: "1:781571197611:web:f11ee3448a0ff8607005ee",
  measurementId: "G-VYF8QLXJHR",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if the userAuth is null, meaning that the user has logged out,
  // the funcion return
  if (!userAuth) return;
  const userRef = doc(db, "users", userAuth.uid);
  const snapShot = await getDoc(userRef);
  // if the snapshot don't exist we will add to the db
  if (!snapShot.exists()) {
    //   Destructuring user info from userAuth
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  //   In any case we will return the userRef because it can be useful
  return userRef;
};

export const getUserSnapshot = (refObj, callback) =>
  onSnapshot(refObj, callback);

export default app;

// (doc) => {
//   userData = {
//     id: userAuth.uid,
//     ...doc.data(),
//   };
// };
