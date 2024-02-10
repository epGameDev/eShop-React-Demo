import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createAuthUser_EmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase-utils";
import Button from "../button/button-component";

import "./sign-up-form-styles.scss";
// import "../../index.scss"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};


const SignUpForm = () => {
  const navigateTo = useNavigate();

  const [formFields, setFromFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    return setFromFields(defaultFormFields);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromFields({...formFields, [name]: value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      return alert("Passwords don't match!");
    }

    try {
      const { user } = await createAuthUser_EmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();

    } 
    catch (error) {
      if (error.code === "auth/email-already-in-use") {
        return alert("Email already in use");
      }
      console.log(`Error in creating user: ${error}`);

    }

    navigateTo('/');
  }


  return (
    <div className="form__sign-up-container">
      <h2>Don&apos;t Have An Account?</h2>
      <h4>Sign up below!</h4>

      <form method="POST" onSubmit={handleSubmit}>
        
        <div>
          <input
            type="text"
            name="displayName"
            id="display-name"
            onChange={handleChange}
            value={displayName}
            placeholder=" "
            required
          />
          <label htmlFor="display-name">Display Name</label>
        </div>

        <div>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={email}
            autoComplete="email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            placeholder=" "
            required
          />
          <label htmlFor="email">Email:</label>
        </div>

        <div>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={password}
            autoComplete="new-password"
            minLength={8}
            maxLength={32}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            placeholder=" "
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        <div>
          <input
            type="password"
            name="confirmPassword"
            id="re-password"
            onChange={handleChange}
            value={confirmPassword}
            autoComplete="new-password"
            minLength={8}
            maxLength={32}
            placeholder=" "
            required
          />
          <label htmlFor="re-password">Confirm Password</label>
        </div>

        <Button buttonType={"primary"} type={"submit"} text={"Sign Up"}/>
      </form>
    </div>
  );
};

export default SignUpForm;
