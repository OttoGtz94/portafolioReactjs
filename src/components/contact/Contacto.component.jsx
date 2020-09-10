import React, {Component} from 'react';
import Formulario from './Formulario.component';
import RedesSociales from './RedesSociales.component';

export default class Contacto extends Component{
    render(){
        return (
          <section className="contacto">
            <Formulario/>
            <RedesSociales/>
          </section>
        );
    }
}