import React, { useEffect, useState } from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  const [dataAgent, setDataAgent] = useState();
  const [agentName, setAgentName] = useState("");
  fetch("http://callcenter9no.somee.com/Agent/AgentSessions")
    .then((res) => res.json())
    .then((data) => {
      setDataAgent(data);
    });
  useEffect(() => {
    if (dataAgent !== undefined) {
      let agent = dataAgent.data.agentes.filter((agent) => {
        return agent.idAgent === parseInt(props.agent);
      });
      setAgentName(agent.agentName);
    }
  }, [setAgentName]);

  return (
    <header className={classes["main-header"]}>
      <h1>Call Center App</h1>
      <Navigation
        agent={agentName}
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
