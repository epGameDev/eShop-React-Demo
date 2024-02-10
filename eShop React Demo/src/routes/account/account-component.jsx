import { useNavigate } from "react-router-dom";
import { googlePopUpSignIn, createUserDocumentFromAuth } from "../../utils/firebase/firebase-utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
import SignIn from "../../components/sign-in-component/sign-in-component";

import "./account-styles.scss";
import Button from "../../components/button/button-component";

const Account = () => {
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
            <div className="account__forms-container">
                <SignIn />
                <SignUpForm />
            </div>
        </main>
    )
}

export default Account;