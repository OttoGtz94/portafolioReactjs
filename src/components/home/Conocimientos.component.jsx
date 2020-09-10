import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faPhp,
  faNode,
  faLaravel,
  faReact,
  faAngular,
  faVuejs,
  faSass,
  faCss3,
  faHtml5,
  faBootstrap,
  faWindows,
  faLinux,
  faUbuntu,
  faCentos,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Efecto from "../Efecto.component";

export default class Conocimientos extends Component {
  render() {
    let iconos = [
      faHtml5,
      faCss3,
      faBootstrap,
      faSass,
      faPhp,
      faLaravel,
      faJsSquare,
      faReact,
      faVuejs,
      faAngular,
      faNode,
      faDatabase,
    ];
    let so = [faWindows, faLinux, faUbuntu, faCentos];
    return (
      <div className="adC">
        <Efecto modal="#modal2" titulo="Mis conocimientos" />
        {/* Modal */}
        <div id="modal2" className="overlay">
          <div className="modal">
            <h2>Mis conocimientos</h2> <hr />
            <a href="#" className="close">
              &times;
            </a>
            <div className="contenidoModal">
              En la Universidad programe con C, C++ y Java, no conforme decidí
              aprender otros lenguajes de programación por cuenta propía, como
              lo es PHP, C# y JavaScript, siendo este ultimo mi lenguaje
              favorito tanto para Backend como para Frontend. Además de
              lenguajes para la estructura de sitios web, como HTML y CSS.
              También conozco base de datos relacionales como no relacionales.
              <br />
              <div className="iconosModal">
                {iconos.map((icono, n=0) => {
                  n= n+1;
                  return (
                    <span key={n.toString()} className={"iconCon " + icono.iconName + "Icon"}>
                      <FontAwesomeIcon icon={icono} />
                    </span>
                  );
                })}
              </div>
              Tengo conocimientos en diferentes sistemas operativos tanto de
              Microsoft como de Open Source, siendo gran fan de los sistemas de
              Tux el pingüino.
              <div className="iconosModal">
                {so.map((icono, n=0) => {
                  n=n+1;
                  return (
                    <span key={n.toString()} className={"iconCon " + icono.iconName + "Icon"}>
                      <FontAwesomeIcon icon={icono} />
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
