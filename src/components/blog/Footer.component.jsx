import React, { Component } from "react";
import RedSocial from "../contact/RedSocial.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faTools } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <footer className="containerFooter">
        <div className="rsContainer">
          <ul>
            <li>
              <RedSocial
                enlace="https://github.com/OttoGtz94"
                claseIcono={"redSocial iconGit"}
                iconoS={<FontAwesomeIcon icon={faGithub} />}
              />
            </li>
            <li>
              <RedSocial
                enlace="https://www.linkedin.com/in/ottogtz94/"
                claseIcono={"redSocial iconGit"}
                iconoS={<FontAwesomeIcon icon={faLinkedinIn} />}
              />
            </li>
            <li>
              <RedSocial
                enlace="https://www.facebook.com/t0To.lml"
                claseIcono={"redSocial iconGit"}
                iconoS={<FontAwesomeIcon icon={faFacebookF} />}
              />
            </li>
            <li>
              <RedSocial
                enlace="https://www.instagram.com/ottogtz_dev/"
                claseIcono={"redSocial iconGit"}
                iconoS={<FontAwesomeIcon icon={faInstagram} />}
              />
            </li>
          </ul>
        </div>
        <div className="infSiteContainer">
          <i>
            <FontAwesomeIcon icon={faTools} /> Este sitio web se construyo con{" "}
            <bold>
              <FontAwesomeIcon icon={faReact} />
              React
            </bold>
          </i>
        </div>
        <div className="copyrightContainer">
          <span>Copyright © 2020 | All Rights Reserved</span>
        </div>
      </footer>
    );
  }
}
