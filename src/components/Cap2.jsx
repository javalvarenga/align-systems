import React from "react";
import "./styles/Cap2.css";

import cap2Img from '../assets/imgs/cap2-1.jpeg' 

function Cap2() {
  return (
    <div className="Cap2">
      <h3>
        <b>Capitulo 2-Eleccion del negocio</b>
      </h3>
      <div className="contenido">
        <p>
          El emprendedor tradicional construye un negocio a partir de un
          producto o idea. Esa línea se basa en la competencia técnica y en una
          gran creatividad, así como en la des- treza de prever patrones y
          tendencias antes que la mayoría de las personas.
          <br />
          El desarrollo de nuevos productos implica siempre un alto nivel de
          riesgo. Las pequeñas empresas o los emprendedores individuales, al
          desarrollar nuevos productos o servicios, no enfrentan los obstáculos
          burocráticos de las grandes empresas.
        </p>
        <h5>
          <b>TIPOS DE EMPRESA</b>
        </h5>
        <h6>
          <i>EMPRESA TRADICIONAL</i>
        </h6>
        <p>
          Es una entidad económico-administrativa con una finalidad económica;
          es decir, tiene la utilidad como objetivo, por medio de actividades de
          transformación o suministro de bienes y servicios, como el comercio,
          la industria, la agricultura, la ganadería, los transportes, las
          telecomunicaciones, el turismo, la educación, etcétera.
        </p>
        <h6>
          <i>EMPRESA FAMILIAR</i>
        </h6>
        <p>
          Es una variante de la empresa tradicional. La empresa familiar es una
          iniciativa que tiene como objetivo mejorar la condición socioeconómica
          de una familia. De manera ideal, divide entre sus integrantes las
          tareas iniciales y los beneficios.
        </p>
        <h6>
          <i>FRANQUICIA</i>
        </h6>
        <p>
          La franquicia o el franchising empresarial es el sistema por el cual
          un franquiciante cede a un franquiciatario el derecho de uso de la
          marca o patente, asociado con el derecho de comercialización exclusiva
          o semiexclusiva de productos o servicios.
        </p>
      </div>
      <h6>
        <i>OFICINA EN CASA</i>
      </h6>
      <p>
        Es una opción atractiva para iniciar micro y pequeñas empresas, ya que
        representa un ahorro considerable en cuanto a los costos si se le
        compara con otras posibilidades.
      </p>
      <img src={cap2Img} alt="" />
    </div>
  );
}

export default Cap2;
