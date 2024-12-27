import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import {faSearch} from '@fortawesome/free-solid-svg-icons';

import "../style/NavBarStyle.css"
import { Link } from 'react-router-dom'
import Logo from '../assets/pizzaLogo.png'
import React, { useState } from 'react';


const NavBar = () => {
    const[openLink, setOpenLink] = useState(false);
    const toggleNavBar = ()=>{
        setOpenLink(!openLink);
    };

    return (
        <div className="navBar-container">
            <div className="leftSide" id = {openLink ? "open": "close"}>
                <img src={Logo} />
                <div className="hiddenLinks">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
           
            <div className="rightSide">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                <button onClick ={toggleNavBar}>
                    <FontAwesomeIcon className="hamburger" icon={faBars} />
                </button>
            </div>

        </div>

    )
}

export default NavBar

/* <h1>LOGO</h1>
    <h2>Community</h2>
    <h2>Knowledge hub</h2>
    <h2>Events</h2>
    <h2>About us</h2>
    <h2>Contact us</h2> */
// <button>Follow us</button>
// <FontAwesomeIcon className = "searchIcon"icon={faSearch}/>