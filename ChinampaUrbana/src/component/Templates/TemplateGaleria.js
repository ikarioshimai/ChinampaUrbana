import React, { Component } from 'react';
import collage from './../../Assets/imagenes/collage.jpg';

export class TemplateGaleria extends Component {
  render() {
    return (
      <div>
        <div className="GaleriDeImagenesCont">
            <div className="ChinampaUrbana">
              <img className="collage" src={collage} width="1300" height="600"/>
          </div>
          </div>
      </div>
    );
  }
}

export default TemplateGaleria;
