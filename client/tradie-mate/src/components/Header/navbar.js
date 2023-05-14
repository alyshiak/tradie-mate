
import { useRef } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";
// import "../../public/assets/logo.svg"



function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
            );
    };    
    

        return (
            <header>
            <img src="/assets/logo-1.svg" className="app-logo" alt="logo" />
       
                    <nav ref={navRef}>
                        <a href="/#">Home</a>
                        <a href="/#">Search</a>
                        <a href="/#">My Profile</a>
                        <a href="/#">Login/Signup</a>
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