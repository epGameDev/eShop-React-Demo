import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
import SignIn from "../../components/sign-in-form/sign-in-component";

import "./account-styles.scss";

const Account = () => {

    return(
        <main className="main__container">
            <h1>Sign In Page</h1>

            <hr/>
            <div className="account__forms-container">
                <SignIn />
                <SignUpForm />
            </div>
        </main>
    )
}

export default Account;