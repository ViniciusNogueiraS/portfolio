import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContextProvider';

import IconLinkedin from '../assets/icons/icons8-linkedin.svg';
import IconGitHub from '../assets/icons/icons8-github.svg';
import IconInstagram from '../assets/icons/icons8-instagram.svg';
import IconWhatsApp from '../assets/icons/icons8-whatsapp.svg';

function Footer() {

    const {isDarkTheme} = useContext(ThemeContext);

    const onClickBtnToTop = () => {
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        });
    }

    return (
        <footer className={`${isDarkTheme ? 'dark' : 'light'}`}>
            <div className="Body">
                <button className={`BtnToTop ${isDarkTheme ? 'dark' : 'light'}`} onClick={onClickBtnToTop}>
                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_15_2)">
                        <path d="M6.59953 0.974947L0.949578 6.63495C0.855778 6.72791 0.781378 6.83851 0.730678 6.96037C0.679878 7.08223 0.653779 7.21294 0.653779 7.34495C0.653779 7.47696 0.679878 7.60767 0.730678 7.72953C0.781378 7.85139 0.855778 7.96199 0.949578 8.05495C1.13688 8.2412 1.39038 8.34574 1.65458 8.34574C1.91868 8.34574 2.17218 8.2412 2.35958 8.05495L7.35953 3.10495L12.3095 8.05495C12.4969 8.2412 12.7503 8.34574 13.0145 8.34574C13.2787 8.34574 13.5322 8.2412 13.7195 8.05495C13.814 7.96234 13.8892 7.85189 13.9407 7.73002C13.9922 7.60814 14.019 7.47726 14.0195 7.34495C14.019 7.21264 13.9922 7.08176 13.9407 6.95989C13.8892 6.83801 13.814 6.72757 13.7195 6.63495L8.06953 0.974947C7.97589 0.873443 7.86224 0.792434 7.73574 0.737027C7.60924 0.681619 7.47263 0.653015 7.33453 0.653015C7.19643 0.653015 7.05983 0.681619 6.93333 0.737027C6.80683 0.792434 6.69317 0.873442 6.59953 0.974947Z" fill="black"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_15_2">
                        <rect width="9" height="15" fill="white" transform="matrix(0 1 -1 0 14.9997 3.05176e-05)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </button>
                <div className="Redes">
                    <a><img src={IconLinkedin} alt="Icone Linkedin"/></a>
                    <a><img src={IconGitHub} alt="Icone GitHub"/></a>
                    <a><img src={IconInstagram} alt="Icone Instagram"/></a>
                    <a><img src={IconWhatsApp} alt="Icone WhatsApp"/></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;