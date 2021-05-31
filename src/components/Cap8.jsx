import React from "react";
import img8 from "../assets/imgs/cap8-1.png"
import './styles/Cap8.css'

function Cap8() {
  return (
    <div className="Cap8">
      <h3>Capitulo 8-Gestión de personas</h3>
      <div className="contenido">
        <p>
          Los recursos humanos y su gestión lo podemos definir en cuatro pasos
          importantes:
        </p>
        <ul>
          <li>Obtención de persona</li>
          <li>Desarrollo de persona</li>
          <li>Gestión del desempeño</li>
          <li>Retención de personas</li>
        </ul>
        <p>
          Que lo podemos definir como proporcionar personal nuevo, capacitación
          del personal, asignación de responsabilidades y promover la eficiencia
          y la satisfacción del empleado.
        </p>
        <img src={img8} alt="" />
        <h5><i>5 componentes clave de la gestión de personas: </i></h5>
        <ul>
            <li>Crear: construir una fuerza laboral que construya un futuro mejor</li>
            <li>Comprender: comprender mejor el presente y para prepararse en el futuro</li>
            <li>Comunicarse: abrir canales para conectarse de manera eficaz</li>
            <li>Colaborar: cooperar de forma más inteligente, más rápida y fuerte</li>
            <li>Confrontar: optimizar las diferencias saludables</li>
        </ul>
      </div>
    </div>
  );
}

export default Cap8;
