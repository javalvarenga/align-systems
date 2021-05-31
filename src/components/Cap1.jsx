import React from "react";
import "./styles/Cap1.css";
import img1 from '../assets/imgs/cap1-1.png'
import img3 from '../assets/imgs/cap1-3.png'
function Cap1(props) {
  return (
    <div className="Cap1">
      <h3><b>Capítulo 1 Espíritu Emprendedor</b></h3>
      <div className="contenido">
        <p>
          La capacidad empresarial es cuando la persona asume el riesgo de
          iniciar una empresa, esto es ser emprendedor que es el que tiene el
          poder de tomar la decisión de realizar una tarea difícil y laboriosa.
        </p>
        <img src={img1} alt="" />
        <img src={img3} alt="" />
        <p><b>INFORMACIÓN Y APOYO</b></p>
        <ul>
            <li>Búsqueda de un contador (Para todo tramite legal)</li>
            <li>Incubadoras (recibir apoyo de empresas mas grandes)</li>
            <li>Organismos de información y apoyo (organizaciones que dan información y hasta financiamiento)</li>
        </ul>
      </div>
    </div>
  );
}

export default Cap1;
