import React, { Component } from 'react';
import ChinampaUrbana from './../../Assets/imagenes/ChinampaUrbana.jpg';


class Section extends Component {
    render() {
        return (
            <div className="sectionCont">


             <div className="ChinampaUrbana">
              <img className="ChinampaUrbana" src={ChinampaUrbana} width="1300" height="600"/>

                      

             </div>
            </div>
        );
    }
}




export default Section;
