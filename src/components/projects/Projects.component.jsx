import React, { Component } from "react";
import Project from "./Project.component";
import axios from "axios";
import Global from "../../Global";
import Search from "../Search.component";
import Loading from '../Loading.component';
import image from '../../assets/images/default-image-github.jpg';

export default class Projects extends Component {
  url = Global.urlMongoDB;
  imageDefault = image;
  state = {
    projects: [],
    status: null,
  };

  componentWillMount() {
    this.getProjects();
  }
  getProjects = () => {
    axios.get(this.url + "show-projects/").then((res) => {
      this.setState({
        projects: res.data.projects,
        status: "success",
      });
      console.log(this.state);
    });
  };

  render() {
    if (this.state.projects.length >= 1) {
      var listProjects = this.state.projects.map((project) => {
        var llave = project._id;
        return (
          <Project
            title={project.title}
            description={project.description}
            builtWith={project.builtWith}
            linkGitHub={project.linkGitHub}
            /* Para cuando la imagen venga por url */
            image={project.urlImage ? project.urlImage : this.imageDefault}
            /* Pra cuando la imagen venga por el método upLoad */
            /* image={
              project.image
                ? this.url + "get-image-project/" + project.image
                : this.imageDefault
            } */
            key={llave.toString()}
          />
        );
      });
      return (
        <section className="projects">
         
          {listProjects}
        </section>
      );
    } else if (
      this.state.projects.length === 0 &&
      this.state.status === "success"
    ) {
      return <h1>No hay Proyectos</h1>;
    } else {
      return <Loading />
    }
  }
}

{
  /* <section className="projects">
        {this.state.data.map((project, n = 0) => {
          n = n + 1;
          return (
            <Project
              titulo={project.title}
              imagen={project.img}
              contenido={project.contenido}
              lenguaje={project.lenguajes}
              git={project.git}
              key={n.toString()}
            />
          );
        })}
</section> */
}
