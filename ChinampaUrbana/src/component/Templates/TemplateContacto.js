import React, { Component } from 'react';
import contactos from './../../Assets/imagenes/contactos.jpg';
export class TemplateContacto extends Component {
  render() {
    return (
      <div>
        <img className="contactos" src={contactos} width="1300" height="600"/>
<h1>Contactos</h1>
        

      </div>
    );
  }
}

export default TemplateContacto;
