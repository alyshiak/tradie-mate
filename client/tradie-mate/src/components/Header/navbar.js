
import { useRef } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';



function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
            );
    };    
    
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
        return (
            <header>
            <Link to="/"><img src="/assets/logo-1.svg" className="app-logo" alt="logo" /></Link>
       
                    <nav ref={navRef}>
                     
    
                        {Auth.loggedIn() ? (
                       <> <Link to="/tradieform">add a Tradie Mate</Link>
                        <Link to ="/" onClick={logout}>Log Out</Link></>
                        ) : ( 
                        <> <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link></>)}
                        <button   
                                className="nav-btn nav-close-btn"
                                onClick={showNavbar}>
                                <FaTimes />
                        </button>
                </nav>
                <button 
                        className="nav-btn"
                        onClick={showNavbar}>
                        <FaBars />
                </button>
        </header>
    );
}

export default Navbar; 