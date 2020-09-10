import React, { Component } from "react";
import Efecto from "../Efecto.component";
import Efecto2 from "../Efecto2.component";


export default class Header extends Component {
  render() {
    return (
      <header className="headerBlog">
        
        <Efecto
          palabraEstatica="[otto@gtz~]#"
          titulo={"Bienvenidos a mi Blog"}
        />
        <div className="contenedorCategorias">
          <Efecto2 palabra="Tecnología" />
          <Efecto2 palabra="Informatica" />
          <Efecto2 palabra="Ciencia" />
        </div>
      </header>
    );
  }
}
