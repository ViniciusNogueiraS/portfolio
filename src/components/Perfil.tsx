import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContextProvider';

import IconLinkedin from '../assets/icons/icons8-linkedin.svg';
import IconGitHub from '../assets/icons/icons8-github.svg';
import IconInstagram from '../assets/icons/icons8-instagram.svg';
import IconWhatsApp from '../assets/icons/icons8-whatsapp.svg';

import imagePerfil from '../assets/images/perfil0623.jpeg';

function Perfil() {

  const {isDarkTheme} = useContext(ThemeContext);

  return (
    <div className="Perfil">
      <div className={`Imagem ${isDarkTheme ? 'dark' : 'light'}`}>
        <img src={imagePerfil}/>
        <div className="ControlRedes">
          <a className={`ControlRede Linkedin ${isDarkTheme ? 'dark' : 'light'}`}><img src={IconLinkedin} alt="Icone Linkedin"/>Linkedin</a>
          <a className={`ControlRede GitHub ${isDarkTheme ? 'dark' : 'light'}`}><img src={IconGitHub} alt="Icone GitHub"/>GitHub</a>
          <a className={`ControlRede Instagram ${isDarkTheme ? 'dark' : 'light'}`}><img src={IconInstagram} alt="Icone Instagram"/>Instagram</a>
          <a className={`ControlRede WhatsApp ${isDarkTheme ? 'dark' : 'light'}`}><img src={IconWhatsApp} alt="Icone WhatsApp"/>WhatsApp</a>
        </div>
      </div>
      <div className="Dados">
        <h1 className={`${isDarkTheme ? 'dark' : 'light'}`}>Vinícius Nogueira de Souza</h1>
        <h2 className={`${isDarkTheme ? 'dark' : 'light'}`}>Desenvolvedor Web Front-end</h2>
        <h3 className={`${isDarkTheme ? 'dark' : 'light'}`}>Experiências, Projetos e Skills</h3>
      </div>
    </div>
  );
}

export default Perfil;
