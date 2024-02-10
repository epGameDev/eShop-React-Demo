import { useNavigate } from "react-router-dom";
import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
import { googlePopUpSignIn, createUserDocumentFromAuth } from "../../utils/firebase/firebase-utils";


import "./sign-in-styles.scss";
import Button from "../../components/button/button-component";

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
            <Button buttonType={"google"} onClick={logGoogleUser} text={"Sign In With Google"} />

            <hr/>
            <SignUpForm />
        </main>
    )
}

export default SignIn;