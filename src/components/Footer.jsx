import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import"../style/Footer.css";

import React from 'react'


function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <FontAwesomeIcon className = "facebook"icon={faFacebook}/>
            <FontAwesomeIcon className = "instagram" icon ={faInstagram}/>
            <FontAwesomeIcon className = "twitter" icon = {faXTwitter}/>
            <FontAwesomeIcon className = "linkedin" icon = {faLinkedin}/>

        </div>
        <p>&copy; 2024 pedrotechpizza.com</p>
    </div>
  )
}

export default Footer
