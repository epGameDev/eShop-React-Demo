import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
import SignIn from "../../components/sign-in-form/sign-in-component";

import { Line, AccountLinkContainer} from "./account-styles.jsx";

const Account = () => {

    return(
        <main className="main__container">
            <h1>Customer Accounts</h1>

            <Line/>
            <AccountLinkContainer>
                <SignIn />
                <SignUpForm />
            </AccountLinkContainer>
        </main>
    )
}

export default Account;