import React, { Component } from 'react';
import TemplateHome from './../Templates/TemplateHome'
import Header from './../layout/Header'
export class PageHome extends Component {
  render() {
    return (
      <div>
        <Header/>
        <TemplateHome/>
      </div>
    );
  }
}

export default PageHome;
