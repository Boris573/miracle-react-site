import React from 'react';

import telegram from '../../assets/icons/telegram.svg';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import twitter from '../../assets/icons/twitter.svg';

import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="left-text">
                    <div className="miracle-с">
                        Copyright ©2020 All rights reserved
                    </div>
                </div>
                <div className="social-networks">
                    <a href="/"><img className="clarity" alt="social-network" src={telegram}/></a>
                    <a href="/"><img className="clarity" alt="social-network" src={twitter}/></a>
                    <a href="/"><img className="clarity" alt="social-network" src={linkedin}/></a>
                    <a href="/"><img className="clarity" alt="social-network" src={instagram}/></a>
                    <a href="/"><img className="clarity" alt="social-network" src={facebook}/></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;