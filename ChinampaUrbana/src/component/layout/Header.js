import React, { Component } from 'react';
import {Link} from 'react-router-dom' 
export class Header extends Component {
    render() {
        return (
            <div className ="MainContHeader">

<ul className='barNav'>

<li className= 'box' >
    <Link to="/pageHome"> Home </Link>
</li>
<li className='box'>
    <Link to="/pageGaleria"> Galeria </Link>
</li>
<li className='box'>
    <Link to="/pageCurso"> Curso </Link>
</li>
<li className='box'>
    <Link to="/pageContacto"> Contacto </Link>
</li>
</ul>
                
            </div>
        );
    }
}

export default Header;
