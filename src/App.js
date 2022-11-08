import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [msg, setMsg] = useState("");
  const [idAgent, setIdAgent] = useState("");

  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = async (idAgent, pin, stationId) => {
    const rawResponse = await fetch(
      "http://callcenter9no.somee.com/Agent/AgentLogin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          idAgent: idAgent,
          pin: pin,
          stationId: stationId,
        }),
      }
    );
    const content = await rawResponse.json();
    setMsg(content.message);
    if (content.message === "agent already logged in") {
      localStorage.setItem("isLoggedIn", "1");
      setIsLoggedIn(true);
      setIdAgent(idAgent);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader
        agent={idAgent}
        isAuthenticated={isLoggedIn}
        onLogout={logoutHandler}
      />
      <main>
        {!isLoggedIn && <Login msg={msg} onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
