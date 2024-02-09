import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { createAuthUser_EmailAndPassword } from "../../utils/firebase/firebase-utils";

import "./sign-up-form-styles.scss";
import "../../index.scss"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};


const SignUpForm = () => {
  const [formFields, setFromFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const navigateTo = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromFields({...formFields, [name]: value });
  };

  return (
    <div className="form__login-container">
      <h2>Sign In</h2>

      <form method="POST" onSubmit={() => {
        navigateTo('/');
        return createAuthUser_EmailAndPassword(email, password);
      }}>
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
