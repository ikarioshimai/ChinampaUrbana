import React, { Component } from 'react';
import Header from './../layout/Header';
import TemplateCurso from './../Templates/TemplateCurso'

class PageCurso extends Component {
  render() {
      return (
          <div className="PageCurso">
<Header/>
<TemplateCurso/>
          </div>
      );
  }
}




export default PageCurso;
