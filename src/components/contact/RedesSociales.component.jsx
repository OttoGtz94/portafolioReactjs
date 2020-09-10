import React, { Component } from "react";
import RedSocial from "./RedSocial.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default class RedesSociales extends Component {
  render() {
    return (
      <section className="contenedorRS">
        <h4 className="tituloRS">Ó buscame en mis Redes Sociales</h4>
        <div className="subcontenedorRS">
          <RedSocial
            enlace="https://github.com/OttoGtz94"
            claseIcono={"redSocial iconGit"}
            iconoS={<FontAwesomeIcon icon={faGithub} />}
          />
          <RedSocial
            enlace="https://www.linkedin.com/in/ottogtz94/"
            claseIcono={"redSocial iconLink"}
            iconoS={<FontAwesomeIcon icon={faLinkedinIn} />}
          />
          <RedSocial
            enlace="https://www.facebook.com/t0To.lml"
            claseIcono={"redSocial iconFb"}
            iconoS={<FontAwesomeIcon icon={faFacebookF} />}
          />
          <RedSocial
            enlace="https://www.instagram.com/toto_lml/"
            claseIcono={"redSocial iconIns"}
            iconoS={<FontAwesomeIcon icon={faInstagram} />}
          />
        </div>
      </section>
    );
  }
}
