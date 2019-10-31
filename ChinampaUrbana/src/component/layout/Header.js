import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <div className ="MainContHeader">

                <div className="box1">
                 Home
                </div>

                <div className="box2">
                 Cursos
                </div>

                <div className="box3">
                  Galeria de imagenes
                </div>

                <div className="box4">
                  Contacto
                </div>
                
            </div>
        );
    }
}

export default Header;
