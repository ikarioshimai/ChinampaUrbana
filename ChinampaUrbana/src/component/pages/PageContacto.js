import React, { Component } from 'react';
import Header from './../layout/Header';
import TemplateContacto from './../Templates/TemplateContacto';

class Contacto extends Component {
  render() {
      return (
          <div className="ContactoCont">
<Header/>
<TemplateContacto/>

          </div>
      );
  }
}




export default Contacto;
