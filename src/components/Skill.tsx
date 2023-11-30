import React, { useContext } from 'react';
import ISkill from '../types/Skill';

import { ThemeContext } from '../contexts/ThemeContextProvider';

function Skill({skeleton, obj}: ISkill) {

  const {
    isDarkTheme,
    isSkeleton,
  } = useContext(ThemeContext);

  return (obj && !isSkeleton) ?(
    <div className="Skill">
      <h4 className={`${isDarkTheme ? 'dark' : 'light'}`}>{obj.title}</h4>
    </div>
  ) : skeleton;
}

export default Skill;
