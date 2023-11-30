import React, { useContext } from 'react';
import IProjeto from '../types/Projeto';

import { ThemeContext } from '../contexts/ThemeContextProvider';

function Projeto({skeleton, obj}: IProjeto) {

  const {
    isDarkTheme,
    isSkeleton,
  } = useContext(ThemeContext);
  
  return (obj && !isSkeleton) ? (
    <div className="Projeto">
      <img src={obj.image} alt="Imagem do Projeto"/>
      <div className="ProjetoContent">
        <h4 className={`${isDarkTheme ? 'dark' : 'light'}`}>{obj.title}</h4>
        <p className={`${isDarkTheme ? 'dark' : 'light'}`}>{obj.text}</p>
      </div>
    </div>
  ) : skeleton;
}

export default Projeto;
