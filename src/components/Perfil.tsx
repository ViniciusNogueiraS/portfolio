import React from 'react';
import IconLinkedin from '../assets/icons/icons8-linkedin.svg';
import IconGitHub from '../assets/icons/icons8-github.svg';
import IconInstagram from '../assets/icons/icons8-instagram.svg';
import IconWhatsApp from '../assets/icons/icons8-whatsapp.svg';

function Perfil() {
  return (
    <div className="Perfil">
      <h1>nome</h1>
      <h2>profissão</h2>
      <h3>Experiências, Projetos e Skills</h3>
      <div>
        <a><img src={IconLinkedin} alt="Icone Linkedin"/></a>
        <a><img src={IconGitHub} alt="Icone GitHub"/></a>
        <a><img src={IconInstagram} alt="Icone Instagram"/></a>
        <a><img src={IconWhatsApp} alt="Icone WhatsApp"/></a>
      </div>
    </div>
  );
}

export default Perfil;
