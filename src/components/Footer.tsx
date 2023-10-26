import React from 'react';

import IconLinkedin from '../assets/icons/icons8-linkedin.svg';
import IconGitHub from '../assets/icons/icons8-github.svg';
import IconInstagram from '../assets/icons/icons8-instagram.svg';
import IconWhatsApp from '../assets/icons/icons8-whatsapp.svg';

function Footer() {
    return (
        <footer>
            <div className="Col Redes">
                <a><img src={IconLinkedin} alt="Icone Linkedin"/></a>
                <a><img src={IconGitHub} alt="Icone GitHub"/></a>
                <a><img src={IconInstagram} alt="Icone Instagram"/></a>
                <a><img src={IconWhatsApp} alt="Icone WhatsApp"/></a>
            </div>
            <div className="Col">
                botão de voltar ao topo
            </div>
        </footer>
    );
}

export default Footer;