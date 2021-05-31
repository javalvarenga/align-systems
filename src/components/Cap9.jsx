import React from "react";

import img1 from "../assets/imgs/cap9-1.png";
import img2 from "../assets/imgs/cap9-2.png";
import "./styles/Cap9.css"
function Cap9() {
  return (
    <div className="Cap9">
      <h3>Capitulo 9-Motivación y liderazgo</h3>
      <div className="contenido">
        <p>
          La motivación es el estado de interés y voluntad de alcanzar la meta.
          La motivación de la persona puede venir de muchos aspectos ya sea
          interna o externa. A la hora de promover la motivación becamos
          identificar las necesidades de la persona, así como buscar un ambiente
          sano para también poder proveer cierta compensación.
        </p>
        <img src={img1} alt="" />
        <p>
          El carácter de líder a sus empleados debe ser de buscar la motivación
          y poder dar siempre un plan orientado a los objetivos de la empresa.
          Encontramos tipos de liderazgo:{" "}
        </p>
        <img src={img2} alt="" />
        <p>
          No existe un tipo de liderazgo mas efectivo que otro. El tipo de
          liderazgo debe verse reflejado según a lo que este se enfrente ya sea
          según el tipo de persona con la que se maneje o la tarea asignada.
        </p>
      </div>
    </div>
  );
}

export default Cap9;
