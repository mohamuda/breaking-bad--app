import React from 'react'
import logo from '../Image/breakingbadlogo.png'
import { Link } from 'react-router-dom';

export default function Nav() {

    return (
    
    <>
    <nav>
        <div class="nav__container">
            <img class="logo" src={logo} />
                <ul class="nav__links">
                    <li><a  class="nav__link"><Link to="/" style={{textDecoration: 'none', color: 'white'}}>Home</Link></a></li>
                    <li><a class="nav__link">Github</a></li>
                    <li><a class="nav__link">Portfolio</a></li>
                </ul>
        </div>
    </nav>   
    
    </>
    
 )
}
