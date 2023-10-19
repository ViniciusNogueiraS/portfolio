import React from 'react';
import ISkill from '../types/Skill';

function Skill({skeleton, obj}: ISkill) {
  return obj ?(
    <div className="Skill">
      <h4>{obj.title}</h4>
    </div>
  ) : skeleton;
}

export default Skill;
