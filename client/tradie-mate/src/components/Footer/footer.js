import { useRef } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';


const Footer=()=>{
  
    return (
        <div className='footer'>
        <div className=' sb__ footer-links'>
        <div className='sb__footer-links-div'>
            <h5> ©Tradie Mate, Aylshia Kandler & Conor Ryan </h5>
           
            
        </div>    
        </div>
        </div>    
         
       
    );
}

export default Footer