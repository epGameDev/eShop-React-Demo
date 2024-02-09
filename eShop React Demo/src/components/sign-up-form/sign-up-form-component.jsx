import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createAuthUser_EmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase-utils";

import "./sign-up-form-styles.scss";
import "../../index.scss"

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

    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        return alert("Email already in use");
      }
      console.log(`Error in creating user: ${error}`);

    }

    navigateTo('/');
  }


  return (
    <div className="form__login-container">
      <h2>Sign In</h2>

      <form method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="display-name">Display Name</label>
          <input
            type="text"
            name="displayName"
            id="display-name"
            placeholder="Enter Display Name"
            onChange={handleChange}
            value={displayName}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            onChange={handleChange}
            value={email}
            autoComplete="email"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            onChange={handleChange}
            value={password}
            autoComplete="new-password"
            minLength={8}
            maxLength={32}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
        </div>

        <div>
          <label htmlFor="re-password">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="re-password"
            placeholder="Retype Password"
            onChange={handleChange}
            value={confirmPassword}
            autoComplete="new-password"
            minLength={8}
            maxLength={32}
            required
          />
        </div>

        <div>
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
