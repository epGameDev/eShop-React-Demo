// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
import { auth, googlePopUpSignIn, googleSignInRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase-utils";


import "./sign-in-styles.scss";

const SignIn = () => {

    // useEffect(() => {
    //     async function fetchData () {
    //         const response = await getRedirectResult(auth);
    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }

    //     fetchData();
    // }, [])

    const logGoogleUser = async () => {

        const { user} = await googlePopUpSignIn();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <main className="main__container">
            <h1>Sign In Page</h1>
            <button className="google-btn" onClick={logGoogleUser}>Sign In With Google</button>
            <SignUpForm />
            {/* <button className="google-btn" onClick={googleSignInRedirect}>Sign In With Google Redirect</button> */}
        </main>
    )
}

export default SignIn;