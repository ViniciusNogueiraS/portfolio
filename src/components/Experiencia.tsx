import React from 'react';
import IExperiencia from '../types/Experiencia';

function Experiencia({skeleton, obj}: IExperiencia) {
  return obj ? (
    <div className="Experiencia">
      <h4>{obj.title}</h4>
      <p>{obj.text}</p>
      <span>{obj.date}</span>
    </div>
  ) : skeleton;
}

export default Experiencia;
