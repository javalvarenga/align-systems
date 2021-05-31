import React from "react";
import "./styles/Cap4.css";

import img1 from "../assets/imgs/cap4.jpg"

function Cap4() {
  return (
    <div className="Cap4">
      <h3><b>Capítulo 4-Planeación y estrategia</b></h3>
      <div className="contenido">
      <p>
        La estrategia define la dirección de la compañía y la forma de competir
        con otras empresas. La planeación estratégica es el proceso de tomar
        decisiones con respecto a la estrategia de la empresa. Todos los
        negocios cuentan con una estrategia y una planeación estratégica, ya sea
        de forma explícita o implícita. Pasos para planeacion estrategica:
      </p>
      <ol>
        <li>
          Defina su misión y entienda su situación estratégica (¿Dónde
          estamos?).
        </li>
        <li>
          Analice el mercado de la empresa para identificar las amenazas y
          oportunidades.
        </li>
        <li>
          Elabore un diagnóstico de la compañía para evaluar su desempeño y
          encontrar sus fortalezas y debilidades, con las cuales usted pretende
          enfrentar las amenazas y aprovechar las conveniencias.
        </li>
        <li>Defina sus estrategias (¿A dónde debemos ir?).</li>
      </ol>
      <h5>
        <b>ELABORE EL DIAGNÓSTICO DE LA EMPRESA</b>
      </h5>
      <p>
        En el diagnóstico organizacional evalúe el desempeño de la empresa e
        identifique las fortalezas y debilidades con las que usted cuenta para
        enfrentar el mercado. Búsquelas en los recursos, en las fuentes de
        desperdicio, en los motivos de insatisfacción de los funcionarios, en
        las opiniones de los proveedores y en las reclamaciones de los clientes.
      </p>
      <h5>
        <i>Desempeño financiero</i>
      </h5>
      <p>
        Uno de los intereses más relevantes en cualquier diagnóstico de la
        empresa es el análisis de los indicadores financieros.{" "}
      </p>
      <h5>
        <i>Participación de los clientes en la facturación</i>
      </h5>
      <p>
        Identifique a los clientes (o los segmentos de mercado) y el volumen de
        negocios que tienen con la empresa.
      </p>
      <h5>
        <i>Participación de los productos y servicios en la facturación</i>
      </h5>
      <p>Identifique el volumen de ventas de cada producto o servicio en relación con el total de sus ventas. </p>
      <h5>
        <i>Participación en el mercado</i>
      </h5>
      <p>Uno de los principales indicadores de desempeño de la empresa es la participación en el mercado.</p>
      <img src={img1} alt="" />
      </div>
    </div>
  );
}

export default Cap4;
