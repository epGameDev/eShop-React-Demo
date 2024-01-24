import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const googlePopUpSignIn = () => signInWithPopup( auth, provider );

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot.exists());
}