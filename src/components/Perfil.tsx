import React from 'react';
import IconLinkedin from '../assets/icons/icons8-linkedin.svg';
import IconGitHub from '../assets/icons/icons8-github.svg';
import IconInstagram from '../assets/icons/icons8-instagram.svg';
import IconWhatsApp from '../assets/icons/icons8-whatsapp.svg';

import imagePerfil from '../assets/images/perfil0623.jpeg';

function Perfil() {
  return (
    <div className="Perfil">
      <div className="Imagem">
        <img src={imagePerfil}/>
      </div>
      <div className="Dados">
        <h1>Vinícius Nogueira de Souza</h1>
        <h2>Desenvolvedor Web Front-end</h2>
        <h3>Experiências, Projetos e Skills</h3>
        <div className="Redes">
          <a><img src={IconLinkedin} alt="Icone Linkedin"/></a>
          <a><img src={IconGitHub} alt="Icone GitHub"/></a>
          <a><img src={IconInstagram} alt="Icone Instagram"/></a>
          <a><img src={IconWhatsApp} alt="Icone WhatsApp"/></a>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
