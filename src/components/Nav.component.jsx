import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBlog,
  faAt,
  faBriefcase,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default class Nav extends Component {
  state = {
    isChecked: false,
  };

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  activa = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="containerIconMenu"></div>
        <input
          type="checkbox"
          id="checkMenu"
          className="checkedMenu"
          checked={this.state.isChecked}
          onClick={this.activa}
        />
        <label htmlFor="checkMenu" className="iconMenu">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <nav className="nav">
          <NavLink
            to="/home"
            className="elementoNav"
            activeClassName="navActivo"
            onClick={this.toggleChange}
          >
            <FontAwesomeIcon icon={faHome} className="navIcon" /> Inicio
          </NavLink>
          <NavLink
            to="/projects"
            className="elementoNav"
            activeClassName="navActivo"
            onClick={this.toggleChange}
          >
            <FontAwesomeIcon icon={faBriefcase} className="navIcon" /> Proyectos
          </NavLink>
          <NavLink
            to="/blog"
            className="elementoNav"
            activeClassName="navActivo"
            onClick={this.toggleChange}
          >
            <FontAwesomeIcon icon={faBlog} className="navIcon" /> Blog
          </NavLink>
          <NavLink
            to="/contactame"
            className="elementoNav"
            activeClassName="navActivo"
            onClick={this.toggleChange}
          >
            <FontAwesomeIcon
              icon={faAt}
              className="navIcon"
              onClick={this.toggleChange}
            />
            Contactame
          </NavLink>
        </nav>
      </React.Fragment>
    );
  }
}
