import React, { useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredAgentId, setEnteredAgentId] = useState("");
  const [enteredPin, setEnteredPin] = useState("");
  const [enteredStation, setEnteredStation] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredAgentId, enteredPin, enteredStation);
  };

  return (
    <Card className={classes.login}>
      <p>{props.msg}</p>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="idAgent">Agent id</label>
          <input
            type="number"
            id="idAgent"
            onChange={(e) => setEnteredAgentId(e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Pin</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setEnteredPin(e.target.value)}
          />
        </div>
        <div className={classes.station}>
          <label htmlFor="station">Choose a station:</label>
          <select
            name="station"
            id="station"
            onChange={(e) => setEnteredStation(e.target.value)}
          >
            <option value={1}>Station 1</option>
            <option value={2}>Station 2</option>
            <option value={3}>Station 3</option>
            <option value={4}>Station 4</option>
            <option value={5}>Station 5</option>
            <option value={6}>Station 6</option>
            <option value={7}>Station 7</option>
            <option value={8}>Station 8</option>
            <option value={9}>Station 9</option>
            <option value={10}>Station 10</option>
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
