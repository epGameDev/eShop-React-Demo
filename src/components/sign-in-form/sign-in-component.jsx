import { useState } from "react";

import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart} from "../../store/user/user-action";

import Button from "../button/button-component";
import { FormSignInContainer, InputContainer} from "./sign-in-styles";

const defaultFormFields = {
  email: "",
  password: "",
}

const SignIn = () => {
  const dispatch = useDispatch();
  
  //=================================//
  //========= Google Log In =========//
  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
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
  

  const handleSubmit = (event) => {
    event.preventDefault(); // prevents page from reloading.

    dispatch(emailSignInStart(email, password));
    resetFormFields();
  }
    
  
    
  //=============================//
  //========= Component =========//
  return (
    <FormSignInContainer>
      <h2>Already A Customer?</h2>
      <h4>Sign In!</h4>

      <form method="POST" onSubmit={handleSubmit}>
      <InputContainer>
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
        </InputContainer>

        <InputContainer>
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
        </InputContainer>

        <div className="btn__login-container">
            <Button buttonType={"primary"} type="submit" text={"Sign In"}/>
            <Button buttonType={"google"} type="button" onClick={signInWithGoogle} text={"Sign In With Google"} />
        </div>

      </form>

    </FormSignInContainer>
  );
};

export default SignIn;
