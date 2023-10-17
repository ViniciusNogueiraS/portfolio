import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import Perfil from './components/Perfil';

function App() {
  return (
    <div className="App">
      <header>
        <Perfil/>
        <div className="Col Imagem">
          <img src={''}/>
        </div>
      </header>
      <div className="Body"
        style={{
           fontSize: '20px'
        }}
      >
        Experiências
        Projetos
        Skills

        <Skeleton count={1} height={'100px'}/>
      </div>
      <footer>
        <div className="Col">
          redes sociais
        </div>
        <div className="Col">
          botão de voltar ao topo
        </div>
      </footer>
    </div>
  );
}

export default App;
