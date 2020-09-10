import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default class Project extends Component {
  render() {
    const { title, image, description, builtWith, key, linkGitHub } = this.props;
    return (
      <div className="project" key={key}>
        <h1 className="projectTitulo">
          <a target="_blank" href={linkGitHub} className="projectLink">
            <FontAwesomeIcon icon={faGithub} className="projectIconGit" />{" "}
            {title}
          </a>
        </h1>
        <img src={image} alt={title} className="projectImage" />
        <p className="projectContenido">{description}</p>
        <i className="projectLenguajes">{builtWith}</i>
      </div>
    );
  }
}
