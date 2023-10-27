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
        <div className="ControlRedes">
          <a className="ControlRede Linkedin"><img src={IconLinkedin} alt="Icone Linkedin"/>Linkedin</a>
          <a className="ControlRede GitHub"><img src={IconGitHub} alt="Icone GitHub"/>GitHub</a>
          <a className="ControlRede Instagram"><img src={IconInstagram} alt="Icone Instagram"/>Instagram</a>
          <a className="ControlRede WhatsApp"><img src={IconWhatsApp} alt="Icone WhatsApp"/>WhatsApp</a>
        </div>
      </div>
      <div className="Dados">
        <h1>Vinícius Nogueira de Souza</h1>
        <h2>Desenvolvedor Web Front-end</h2>
        <h3>Experiências, Projetos e Skills</h3>
      </div>
    </div>
  );
}

export default Perfil;
