import React, { useContext } from 'react';
import IExperiencia from '../types/Experiencia';

import { ThemeContext } from '../contexts/ThemeContextProvider';

function Experiencia({skeleton, obj}: IExperiencia) {

  const {
    isDarkTheme,
    isSkeleton,
  } = useContext(ThemeContext);

  return (obj && !isSkeleton) ? (
    <div className="Experiencia">
      <h4 className={`${isDarkTheme ? 'dark' : 'light'}`}>{obj.title}</h4>
      <p className={`${isDarkTheme ? 'dark' : 'light'}`}>{obj.text}</p>
      <span className={`${isDarkTheme ? 'dark' : 'light'}`}>{obj.date}</span>
    </div>
  ) : skeleton;
}

export default Experiencia;
