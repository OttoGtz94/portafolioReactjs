import React, { Component } from "react";
import Efecto from "../Efecto.component";

export default class SobreMi extends Component {
  render() {
    return (
      <div className="adMi">
        <Efecto modal="#modal1" titulo="Sobre mi" />
        {/* Modal */}
        <div id="modal1" className="overlay">
          <div className="modal">
            <h2>Sobre mi</h2> <hr />
            <a href="#" className="close">
              &times;
            </a>
            <p className="contenidoModal">
              Soy egresado de la{" "}
              <a target="_blank" href="http://www.unirem.edu.mx/unirem/">
                Universidad de la Republica Mexicana
              </a>{" "}
              en la carrera de{" "}
              <strong>Ingeniería en Sistemas Computacionales</strong> en el año
              2020. <br /> <br />
              Uno de mis puntos fuertes es la responsabilidad y el compromiso
              que tengo con el trabajo.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
