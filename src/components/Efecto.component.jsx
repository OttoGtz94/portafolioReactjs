import React, { Component } from "react";

export default class Efecto extends Component {
  render() {
    const { modal, titulo, palabraEstatica } = this.props;
    return (
      <div className="efecto">
        <div className="contenedorLetras">
          <span className="palabraEstatica">{palabraEstatica}</span>
          <a href={modal} className="botonModal">
            <p className="letras">{titulo}</p>
          </a>
        </div>
      </div>
    );
  }
}
