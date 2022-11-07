import React, { useState, useEffect } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes("@") && enteredPassword.trim().length > 6
    ); //after every login component function execution, the useEffect will be ran only if the dependencies below changed
  }, [enteredEmail, enteredPassword]);
  
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Agent id</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Pin</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
          />
        </div>
        <div className={classes.station}>
          <label htmlFor="station">Choose a station:</label>
          <select name="station" id="station">
            <option value="Station 1">Station 1</option>
            <option value="Station 2">Station 2</option>
          </select>
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
