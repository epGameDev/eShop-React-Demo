import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDbYV-pA-oZ-uJBrbY6evQdffPFbl-ZiV8",
  authDomain: "react-eshop-demo-db.firebaseapp.com",
  projectId: "react-eshop-demo-db",
  storageBucket: "react-eshop-demo-db.appspot.com",
  messagingSenderId: "491479606927",
  appId: "1:491479606927:web:a63db0c52a96ae614d32fa",
};



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});



// Authenticating Users
export const auth = getAuth();
export const googlePopUpSignIn = () => signInWithPopup( auth, googleProvider );
export const googleSignInRedirect = () => signInWithRedirect(auth, googleProvider); 




// Creating the Firestore Database
export const db = getFirestore();


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
        console.log(`Error creating user: ${error}`);
      }
    }

    return userDocRef;
}

export const createAuthUser_EmailAndPassword = async (email, password) => {

  if ( !email || !password ) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}