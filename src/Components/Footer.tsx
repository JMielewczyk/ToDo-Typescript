import React from 'react';

//styles
import { FooterWrap } from '../assets/styles/Footer/FooterWrap';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <FooterWrap>
            <p>Created by: Jakub Mielewczyk</p>
            <div>
                <a href="https://www.linkedin.com/in/jakub-mielewczyk-b411a6221/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/JMielewczyk">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </FooterWrap>
    );
};
export default Footer;
