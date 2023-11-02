import React, { useContext } from 'react';
import ISkill from '../types/Skill';

import { ThemeContext } from '../contexts/ThemeContextProvider';

function Skill({skeleton, obj}: ISkill) {

  const {isDarkTheme} = useContext(ThemeContext);

  return obj ?(
    <div className="Skill">
      <h4 className={`${isDarkTheme ? 'dark' : 'light'}`}>{obj.title}</h4>
    </div>
  ) : skeleton;
}

export default Skill;
