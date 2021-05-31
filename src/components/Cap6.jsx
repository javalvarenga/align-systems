import React from "react";
import "./styles/Cap6.css";

import mark from '../assets/imgs/mark.jpg'

function Cap6() {
  return (
    <div className="Cap6">
      <h3><b>Capítulo 6-Marketing</b></h3>
      <div className="contenido">
      <p>
        De acuerdo con la Asociación Estadounidense de Marketing, la función de
        marketing comprende la planeación y práctica de actividades de
        concepción, establecimiento de precios, fomento y distribución de
        ideas, productos y servicios para crear valores que satisfagan los
        objetivos individuales y organizacionales.
      </p>
          <ol>
              <li><b>Clientes que utilizan y pagan</b></li>
              <li><b>Clientes que utilizan y no pagan</b></li>
              <li><b>Clientes que no utilizan y pagan</b></li>
          </ol>
        <h5><i>FACTORES QUE INFLUYEN EN EL PROCESO DE COMPRA DE LOS CONSUMIDORES</i></h5>
        <ul>
            <li>Cultura</li>
            <li>Clase social</li>
            <li>Grupos de consumidores</li>
            <li>Factor situacional</li>
            <li>Tipo de mercado</li>
        </ul>
        <img src={mark} alt="" />
      </div>
    </div>
  );
}

export default Cap6;
