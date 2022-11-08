import React, { useState } from "react";

import Card from "../UI/Card/Card";
import "./Home.css";

const Home = (props) => {
  const [finishQuantities, setFinishQuantities] = useState();
  const [enCursoQuantities, setEnCursoQuantities] = useState();
  const [enEsperaQuantities, setEnEsperaQuantities] = useState();
  const [finish, setFinish] = useState([]);
  const [enCurso, setEnCurso] = useState([]);
  const [enEspera, setEnEspera] = useState([]);
  const quantities = () => {
    fetch("http://callcenter9no.somee.com/StatusCall/Quantities")
      .then((response) => response.json())
      .then((response) => {
        setFinishQuantities(response.data.cantidades[0].finalizaron);
        setEnCursoQuantities(response.data.cantidades[0].enCurso);
        setEnEsperaQuantities(response.data.cantidades[0].enEspera);
      });
  };

  const statusCall = () => {
    fetch("http://callcenter9no.somee.com/StatusCall/StatusCall")
      .then((response) => response.json())
      .then((response) => {
        setEnCurso(response.data.contestadas);
        setEnEspera(response.data.enEspera);
        setFinish(response.data.finalizadas);
      });
  };
  statusCall();
  quantities();
  return (
    <>
      {" "}
      <Card className="home">
        <div className="frow">
          <div className="col col3">
            En espera: {enEsperaQuantities} <div className=""></div>
          </div>
          <div className="col col3">En curso: {enCursoQuantities}</div>
          <div className="col col3">Finalizadas: {finishQuantities}</div>
        </div>
        <div className="frow">
          <div className="col col3">
            {enEspera.length > 0 ? (
              <div className="tabla1">
                <table>
                  <tr>
                    <td>Cliente</td>
                    <td>Inicio</td>
                    <td>Fin</td>
                    <td>Agente</td>
                  </tr>
                  {enEspera.map((item) => {
                    return (
                      <tr key={item.callId}>
                        <td>{item.phoneNumber}</td>
                        <td>{item.dateTimeAnswered}</td>
                        <td>{item.dateTimeEnded}</td>
                        <td>{item.name}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            ) : (
              <p>No exixten llamadas en curso</p>
            )}
          </div>
          <div className="col col3">
            {enCurso.length > 0 ? (
              <div className="tabla1">
                <table>
                  <tr>
                    <td>Cliente</td>
                    <td>Inicio</td>
                    <td>Fin</td>
                    <td>Agente</td>
                  </tr>
                  {enCurso.map((item) => {
                    return (
                      <tr key={item.callId}>
                        <td>{item.phoneNumber}</td>
                        <td>{item.dateTimeAnswered}</td>
                        <td>{item.dateTimeEnded}</td>
                        <td>{item.name}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            ) : (
              <p>No exixten llamadas en curso</p>
            )}
          </div>
          <div className="col col3">
            <div className="tabla1">
              <table>
                <tr>
                  <td>Cliente</td>
                  <td>Inicio</td>
                  <td>Fin</td>
                  <td>Agente</td>
                </tr>
                {finish.map((item) => {
                  if (item.length === 0) {
                    return <h1>No se a finalizado nunguna llamada</h1>;
                  }
                  return (
                    <tr key={item.callId}>
                      <td>{item.phoneNumber}</td>
                      <td>{item.dateTimeAnswered}</td>
                      <td>{item.dateTimeEnded}</td>
                      <td>{item.name}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Home;
