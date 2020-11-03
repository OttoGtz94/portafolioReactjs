import React, { Component } from "react";
import emailjs from "emailjs-com";
import { Form } from "react-advanced-form";

export default class Formulario extends Component {
  formularioRef = React.createRef();
  nombreRef = React.createRef();
  correoRef = React.createRef();
  mensajeRef = React.createRef();
  siteRef = React.createRef();
  state = {
    user: {},
    flag: "",
  };
  recibirFormulario = (e) => {
    /* e.preventDefault(); */
    if (!this.nombreRef.current.value) {
      alert("Escribe tu nombre");
    } else if (!this.correoRef.current.value) {
      alert("Escribe un correo");
    } else if (!this.mensajeRef.current.value) {
      alert("Escribe un mensaje");
    } else {
      var user = {
        nombre: this.nombreRef.current.value,
        correo: this.correoRef.current.value,
        mensaje: this.mensajeRef.current.value,
        siteRef: this.siteRef.current.value,
      };
      console.log(
        this.nombreRef.current.value +
          " " +
          this.correoRef.current.value +
          " " +
          this.mensajeRef.current.value
      );
      /*  alert(
        this.nombreRef.current.value +
          " " +
          this.correoRef.current.value +
          " " +
          this.mensajeRef.current.value
      ); */
      console.log(emailjs);
      emailjs
        .sendForm(
          "service_j4exxhi",
          "template_tfid888",
          e.target,
          "user_I4CFql5Kb3X62SkdejOFr"
        )
        .then(
          (result) => {
            /* alert("Mensaje enviado"); */
            console.log(result.text);
          },
          (error) => {
            alert("Fallo al enviar correo");
            console.log(error.text);
          }
        );
      this.setState({
        user: {},
        flag: "enviado",
      });
    }
  };

  clearForm = (e) => {
    e.preventDefault();
    alert("Formulario enviado");
  };

  render() {
    return (
      <React.Fragment>
        <form
          className="formulario"
          onSubmit={this.recibirFormulario}
          ref={this.formularioRef}
        >
          <h4 className="tituloFormulario">Escribeme un mensaje</h4>
          <input
            type="hidden"
            value="Portafolio Web"
            name="site_web"
            ref={this.siteRef}
          />
          <input
            type="text"
            placeholder="Nombre"
            className="txtFormulario"
            ref={this.nombreRef}
            name="user_name"
          />
          <input
            type="email"
            placeholder="Correo"
            className="txtFormulario"
            ref={this.correoRef}
            name="user_email"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Escribe tu mensaje"
            className="txtAreaFormulario"
            ref={this.mensajeRef}
            name="user_message"
          ></textarea>
          <button
            type="submit"
            className="botonFormulario"
            /* onClick={this.clearForm} */
          >
            Enviar
          </button>
          {this.state.flag === "enviado" ? alert("Enviado, gracias.") : ""}
        </form>
      </React.Fragment>
    );
  }
}
