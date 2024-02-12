import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});



// Authenticating Users
export const auth = getAuth();
export const googlePopUpSignIn = () => signInWithPopup( auth, googleProvider );
export const googleSignInRedirect = () => signInWithRedirect(auth, googleProvider); 




// Initializing the Firestore Database
const db = getFirestore();

// CREATING USERS IN THE DATABASE
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

    return userDocRef;
}


// CREATING USER ACCOUNT VIA EMAIL/PASSWORD
export const createAuthUser_EmailAndPassword = async (email, password) => {

  if ( !email || !password ) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}


// SIGNING IN USER VIA USERNAME/PASSWORD
export const signInUser = async (email, password) => {

  if (!email || !password) return;
  const user = auth.currentUser;
  if (user) return alert("You are already signed in.");
  
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    // const userUID = await response.user.uid;

    console.log(response);
    return alert('You are now signed in!');
    
  } catch (error) {

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


// SIGN OUT CURRENT USERS
export const signOutUser = async () => {
  const user = auth.currentUser;
  if (!user) return alert("No user is signed in.");

  try {
    await signOut(auth)
    alert(`${user.email} is now signed out.`)
    
  } catch (error) {
    console.log(`There was an error signing out: ${error.code}`);
  }

}