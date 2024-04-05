# Course Notes:

Table of contents:

- [Firebase-Utils: Setting Up Auth and Firestore](#firebase-utils "Setting up firebase")

## React Notes:

### Firebase Utils: 

First import the method to capture the firebase configuration. We will do this in a `utils` file called `firebase-utils.js`. Because this is just javascript and not rendering any html, we use the `.js` file extension and not `.jsx`. 

```js
import { initializeApp } from "firebase/app";
```
<br/>
The above will be used to capture the `firebase` configuration settings. You get this in your firebase account for this app. <code> Project Overview > Project Settings </code> holds these configuration settings, at least at this time. This will allow firebase modules to work with your firebase project.

<br/>
<br/>

Next are the functions you will need to make this all work. In this project we use two parts of firebase. `auth` and `firestore` (which is the database). See below.

```js
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChange,
} from "firebase/auth";


import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
```

<br/>

For `firebase/auth` we collected these methods:

- `getAuth` is a method that returns an auth instance with a provided FirebaseApp, called with `initializeApp`. If non exist, it will create one with platform specific dependencies.
- `signInWithPopup` a function which displays a popup window where users can use their Google accounts to sign. Works with `GoogleAuthProvider` to authenticate the user. 
- `GoogleAuthProvider` is a class that carries methods to authenticate the user on the firebase platform. 
- `createUserWithEmailAndPassword` is another provider like `GoogleAuthProvider`, but uses an email password combo to create an account for the user signing up.
- `signInWithEmailAndPassword` is used to authenticate the user with the auth application.
- `signOut` is the general method for signing out the currently authenticated user.
- `onAuthStateChange` is a function that takes an auth instance and a callback function to observe the changes to the users authentication state like user sign in or out. Thus also allowing to preform a callback function after the state has been changed.

<br/>

Next is the `firebase/firestore`. There are four general methods that we pulled from this imported module. That is:

- `getFirestore`: This method returns the default instance of the firestore. If no instance exists, a new default instance will be created.
- `doc`: This method is used to refer to a specific document in Firestore. It requires a Firestore reference, a string path to the document, and a document ID (typically a UID). The `doc` method returns a `DocumentReference` that can be used to read, write, or listen to the specified location in the database.
- `getDoc`: Retrieves data from the database and puts it into a `DocumentSnapshot`, which provides methods like `.exists()`.
- `setDoc`: Pushes data to the database using the specified `DocumentReference`, creating the document if it doesn't exist or overwriting it if it does (unless the merge option is added).

<br/>
<br/>
<br/>

### Firebase Database:

First thing we do is import **collection** and **writeBatch** from the firebase/firestore. 

```js
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from "firebase/firestore";
```

<br />

This will allow us to create a collection, which is the base entry to the database like `Users` was, and then batch write calls to the database to complete a **transaction**. A transaction is a completed set of writes to the database. If the whole transaction is not successful, the writes that were sucsessful, get reverted.


<br/>
<br/>
<br/>
<br/>

## Notes For Post React Course

There are going to be a few things




















<style>
    ul {
        margin: 1rem 0;
    }

    li {
        margin: 0.5rem 0;
    }
</style>