import React from 'react';
import IProjeto from '../types/Projeto';

function Projeto({skeleton, obj}: IProjeto) {
  return obj ? (
    <div className="Projeto">
      <img src={obj.image} alt="Imagem do Projeto"/>
      <div className="ProjetoContent">
        <h4>{obj.title}</h4>
        <p>{obj.text}</p>
      </div>
    </div>
  ) : skeleton;
}

export default Projeto;
