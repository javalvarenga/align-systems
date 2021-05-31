import React from "react";
import './styles/Cap7.css'

import img1 from '../assets/imgs/cap7-1.png'
import img2 from '../assets/imgs/cap7-2.png'

function Cap7() {
  return (
    <div className="Cap7">
      <h3>Capitulo 7-Operaciones</h3>
      <div className="contenido">
        <p>
          El sistema de operaciones transforma las decisiones de estrategia y
          marketing en productos y servicios esto se obtiene gracias al
          resultado del proceso de transformación.
        </p>
        <h5>
          <i>Tipos de producción:</i>
        </h5>
        <ul>
          <li>Continua</li>
          <li>En serie</li>
          <li>Bajo pedido</li>
          <li>Personalizada</li>
          <li>Con proyectos</li>
        </ul>
        <p>
          El diseño del producto o servicio debe ser definido con anterioridad
          para identificar las operaciones para el que será creado.
        </p>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
    </div>
  );
}

export default Cap7;
