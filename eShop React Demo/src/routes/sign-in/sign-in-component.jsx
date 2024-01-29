import { googlePopUpSignIn, createUserDocumentFromAuth } from "../../utils/firebase/firebase-utils";


import "./sign-in-styles.scss";

const SignIn = () => {

    const logGoogleUser = async () => {

        const { user} = await googlePopUpSignIn();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return(
        <main className="main__container">
            <h1>Sign In Page</h1>
            <button className="google-btn" onClick={logGoogleUser}>Sign In With Google</button>
        </main>
    )
}

export default SignIn;