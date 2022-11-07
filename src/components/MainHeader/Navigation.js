import React from "react";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            <a href="/">Get call</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Do call</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>Cerrar sesión</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
