import React, {Component} from 'react';

export default class Modal extends Component {
    render(){
        return (
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
                  {iconos.map((icono) => {
                    return (
                      <span className={"iconCon " + icono.iconName + "Icon"}>
                        <FontAwesomeIcon icon={icono} />
                      </span>
                    );
                  })}
                </div>
                Tengo conocimientos en diferentes sistemas operativos tanto de
                Microsoft como de Open Source, siendo gran fan de los sistemas
                de Tux el pingüino.
                <div className="iconosModal">
                  {so.map((icono) => {
                    return (
                      <span className={"iconCon " + icono.iconName + "Icon"}>
                        <FontAwesomeIcon icon={icono} />
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
    }
}