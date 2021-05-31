import React from "react";
import "./styles/Cap5.css";
import imgOrg from '../assets/imgs/cap5-1.jpg'
function Cap5() {
  return (
    <div className="Cap5">
      <h3><b>Capítulo 5-Organización de la Empresa</b></h3>
      <div className="contenido">
        <h5>
          <i>PROCESO DE ORGANIZACIÓN</i>
        </h5>
        <ol>
          <li>Identifique las funciones de la empresa.</li>
          <li>Transforme las funciones en departamentos.</li>
          <li>Defina las responsabilidades de las personas.</li>
          <li>Diseñe la estructura organizacional.</li>
        </ol>
        <h5>
          <i>FUNCIONES DE LA EMPRESA</i>
        </h5>
        <p>
          Las funciones de la empresa son las principales tareas que se deben
          realizar para alcanzar los objetivos. Por lo general, todas las
          empresas tienen las mismas funciones, que son: abastecimiento y
          operaciones, marketing y ventas, finanzas, logística y recursos
          humanos.
        </p>
        <h5>
          <i>CREACIÓN DE DEPARTAMENTOS Y DEFINICIÓN DE RESPONSABILIDADES</i>
        </h5>
        <p>
          Una vez que se han definido los objetivos y se han identificado las
          funciones, el trabajo a realizar se divide en unidades o bloques, de
          acuerdo con los criterios más apropiados para su ejecución.{" "}
        </p>
        <img src={imgOrg} alt="" />
      </div>
    </div>
  );
}

export default Cap5;
