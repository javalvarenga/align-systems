import React from "react";
import "./styles/Cap3.css";
import global from '../assets/imgs/globalimg.jpg'

function Cap3() {
  return (
    <div className="Cap3">
      <h3>
        <b>Capítulo 3-Lo que debe saber sobre la situación económica</b>
      </h3>
      <div className="contenido">
        <h5>
          <i>AMBIENTE ECONÓMICO SANO</i>
        </h5>
        <p>
          Un ambiente económico sano es la condición fundamental para estimular
          las inversiones en la creación de empresas. Una parte sustancial de
          esa percepción de los emprendedores depende de las condiciones creadas
          por el gobierno, por ejemplo:
        </p>
        <ul>
          <li>Carga tributaria justa</li>
          <li>Corrupción</li>
          <li>Estabilidad legal</li>
          <li>Actitud positiva en relación con la capacidad empresarial</li>
        </ul>
        <p>
          En términos objetivos, el ambiente económico comprende tres
          condiciones básicas: económica, de mercado y global. Para iniciar el
          estudio de estos factores del ambiente, es importante recapitular
          algunos conceptos económicos fundamentales que todo emprendedor debe
          conocer: mercado, competencia, demanda y oferta.
        </p>
        <h5>
          <i>SITUACIÓN GLOBAL</i>
        </h5>
        <p>
          El significado de la globalización abarca el aumento de la competencia
          internacional y del libre comercio entre países. Hace ya tiempo que
          productos con marcas estadounidenses y europeas son fabricados por
          empresas del sureste asiático para su distribución en todo el mundo.
        </p>
        <img src={global} alt="" />
      </div>
    </div>
  );
}

export default Cap3;
