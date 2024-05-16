import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { 
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDbYV-pA-oZ-uJBrbY6evQdffPFbl-ZiV8",
  authDomain: "react-eshop-demo-db.firebaseapp.com",
  projectId: "react-eshop-demo-db",
  storageBucket: "react-eshop-demo-db.appspot.com",
  messagingSenderId: "491479606927",
  appId: "1:491479606927:web:a63db0c52a96ae614d32fa",
};



// Initialize Firebase 
initializeApp(firebaseConfig);

// Initializing the Firestore Database
const db = getFirestore();


// Google Provider Setup
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
});


// Authenticating Initialization 
export const auth = getAuth();
export const googlePopUpSignIn = () => signInWithPopup( auth, googleProvider );




//==================================================//
//========= CREATING USERS IN THE DATABASE =========//
export const createUserDocumentFromAuth = async (userAuth, args = {}) => {

  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  // if user data doesn't exist, create new data
  if (!userSnapShot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...args });
    } catch (error) {
      console.log(`Error creating user: ${error.code}`);
    }
  }

  return userSnapShot;
}



//============================================================//
//========= CREATING USER ACCOUNT VIA EMAIL/PASSWORD =========//
export const createAuthUser_EmailAndPassword = async (email, password) => {

  if ( !email || !password ) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}



//=========================================================//
//========= SIGNING IN USER VIA USERNAME/PASSWORD =========//
export const signInUser = async (email, password) => {

  if (!email || !password) return;
  const user = auth.currentUser;
  if (user) return alert("You are already signed in.");
  
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    alert(`Hi, You are now signed in!`);

    return response;

  } 
  catch (error) {

    switch (error.code) {

      case "auth/too-many-requests":
        alert("Too many sign in requests. Try again later");
          break;

      case "auth/invalid-credential":
        alert("Invalid credentials. No account? Sign up!");
          break;

      default:
        console.log(error);
          break;
    }
  }
}



//==========================================//
//========= SIGN OUT CURRENT USERS =========//
export const signOutUser = async () => {
  const user = auth.currentUser;
  // if (!user) return alert("No user is signed in.");

  try {
    const response = await signOut(auth)
    alert(`${user.email} is now signed out.`)
    return response;

  } catch (error) {
    console.log(`There was an error signing out: ${error.code}`);

  }

}


//================================================//
//========= Observing Auth State Changes =========//
export const getCurrentUserFromAuth = () => {

  return new Promise((resolve, reject) => {
    
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      unsubscribe(); // prevents memory leaks. Shuts down listener.
      resolve(userAuth);

    }, reject );

  });
}


export const createCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey); // Structure: collection key > Document > Field Entry
  const batch = writeBatch(db);

  objectsToAdd.forEach(obj => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());

    batch.set(docRef, obj);
  });

  await batch.commit();

  console.log("done batch");
}


export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const queryData = query(collectionRef);
  const querySnapshot = await getDocs(queryData);

  return querySnapshot.docs.map( (docSnapshot) => docSnapshot.data() );
  
}