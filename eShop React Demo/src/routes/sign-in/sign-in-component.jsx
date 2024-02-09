import { useNavigate } from "react-router-dom";
import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
import { googlePopUpSignIn, createUserDocumentFromAuth } from "../../utils/firebase/firebase-utils";


import "./sign-in-styles.scss";

const SignIn = () => {
    const navigateTo = useNavigate();

    const logGoogleUser = async () => {

        const { user} = await googlePopUpSignIn();
        await createUserDocumentFromAuth(user);
        navigateTo('/');
    }

    return(
        <main className="main__container">
            <h1>Sign In Page</h1>
            <button className="google-btn" onClick={logGoogleUser}>Sign In With Google</button>

            <hr/>
            <SignUpForm />
        </main>
    )
}

export default SignIn;