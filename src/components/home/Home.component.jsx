import React, { Component } from "react";
import Logo from "../../assets/images/logo.svg";
import SobreMi from './SobreMi.component';
import Conocimientos from './Conocimientos.component';
import Efecto from '../Efecto.component';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palabra: "ser autodidacta",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        palabra: "la tecnología",
      });
    }, 6000);
  }
  render() {
    return (
      <section className="home">
        <div className="contenedorLogo">
          <img src={Logo} alt="otto gutierrez" className="logo" />
          <Efecto titulo="System Computer Engineer" />
        </div>
        <div className="acercaDe">
          <SobreMi/>
          <Conocimientos/>
        </div>
        
      </section>
    );
  }
}
