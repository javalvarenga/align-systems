import React from "react";

import "./styles/Home.css";
function Home() {
  return (
    <div className="Home">
      <div className="overlay">
        <p>
          "La mitad de lo que separa a los emprendedores exitosos de los que no
          triunfan es la perseverancia"
        </p>
      </div>
      <div className="cards">
        <div className="mision">
          <h4>
            <b>Misión</b>
          </h4>
          <p>
            Proporcionar servicios especializados en el ámbito de las TI
            auditoría, consultoría, servicio técnico, adecuación y certificación
            que ayuden a nuestros clientes a solucionar sus problemas con
            agilidad, proporcionando un valor añadido a través de altos
            conocimientos técnicos.
          </p>
        </div>
        <div className="vision">
          <h4>
            <b>Visión</b>
          </h4>
          <p>
            Ser una firma del ámbito tecnológico destacada nacional e
            internacionalmente en la que la gran calidad de nuestros servicios y
            profesionalidad de todo nuestro personal sea garante para el éxito
            de nuestros clientes en sus objetivos.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Home;
