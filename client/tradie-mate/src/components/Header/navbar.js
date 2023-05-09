import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.png';
import css from 'src/components/Header/navbar.css';

function navbar() {

return(
    <nav>
        {/* logo */}
        <div>
            <img src={logo} alt="logo" />
        </div>

        {/* Favourite Tradies */}
        <div>
            <FaHeart /> Favourite Tradies
        </div> 

        {/* Login/Logout */} 
        <div>
            <FaUser /> Login 
        </div>   
    </nav>
)
}

export default navbar; 