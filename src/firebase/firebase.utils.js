import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  onSnapshot,
  collection,
  writeBatch,
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
export const db = getFirestore();

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
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
      console.log(errorCode, errorMessage, email, credential);
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

export const onCollectionSnapshot = (collectionKey, callback) => {
  const collectionRef = collection(db, collectionKey);
  return onSnapshot(collectionRef, callback);
};
export default app;

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //select the collection
  const collectionRef = collection(db, collectionKey);
  //create a batch in order to perform multiple write at the same time
  const batch = writeBatch(db);
  //for each collection category we request the doc to firebase
  //if the doc does not exists firebase will automatically create
  // a new document and assign it a random id unless otherwise specified
  objectsToAdd.forEach((obj) => {
    const newDocRef = doc(collectionRef);
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      items,
      title,
    };
  });

  return transformedCollection.reduce((accumulator, collectionObj) => {
    accumulator[collectionObj.title.toLowerCase()] = collectionObj;
    return accumulator;
  }, {});
};
