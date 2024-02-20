import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { googlePopUpSignIn, signInUser } from "../../utils/firebase/firebase-utils";

import Button from "../button/button-component";

import "./sign-in-styles.scss";

const defaultFormFields = {
    email: "",
    password: "",
}

const SignIn = () => {

  const navigateTo = useNavigate();
  
  //=================================//
  //========= Google Log In =========//
  const signInWithGoogle = async () => {

    await googlePopUpSignIn();
    navigateTo('/');
  }

  
  //==============================//
  //========= Form Logic =========//
  const [formFields, setFromFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  const resetFormFields = () => {
    return setFromFields(defaultFormFields);
  }


  const handleChange = (event) => {
    const {name, value} = event.target;
    setFromFields({...formFields, [name]: value });
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevents page from reloading.

    await signInUser(email, password);
    resetFormFields();
    navigateTo('/');
  }
    
  
    
  //=============================//
  //========= Component =========//
  return (
    <div className="form__sign-in-container">
      <h2>Already A Customer?</h2>
      <h4>Sign In!</h4>

      <form method="POST" onSubmit={handleSubmit}>
      <div>
          <input
            type="email"
            name="email"
            id="emailSignIn"
            onChange={handleChange}
            value={email}
            autoComplete="email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            placeholder=" "
            title="Only lowercase characters allowed"
            required
          />
          <label htmlFor="emailSignIn">Email:</label>
        </div>

        <div>
          <input
            type="password"
            name="password"
            id="passwordSignIn"
            onChange={handleChange}
            value={password}
            autoComplete="current-password"
            minLength={8}
            maxLength={32}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            placeholder=" "
            required
          />
          <label htmlFor="passwordSignIn">Password</label>
        </div>

        <div className="btn__login-container">
            <Button buttonType={"primary"} type="submit" text={"Sign In"}/>
            <Button buttonType={"google"} type="button" onClick={signInWithGoogle} text={"Sign In With Google"} />
        </div>

      </form>

    </div>
  );
};

export default SignIn;
