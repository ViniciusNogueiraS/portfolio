import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Perfil from './components/Perfil';

import imagePerfil from './assets/images/perfil0623.jpeg';

function App() {
  return (
    <div className="App">
      <header>
        <Perfil/>
        <div className="Col Imagem">
          <img src={imagePerfil}/>
        </div>
      </header>
      <div className="Body"
        style={{
           fontSize: '20px'
        }}
      >
        <h3>Experiências</h3>
        <article className="Experiencias">
          <Skeleton count={1} height={'250px'}/>
          <Skeleton count={1} height={'250px'}/>
          <Skeleton count={1} height={'250px'}/>
        </article>
        <h3>Projetos</h3>
        <article className="Projetos">
          <AliceCarousel mouseTracking items={[]}/>
        </article>
        <h3>Skills</h3>
        <article className="Skills">
          <Skeleton count={6} height={'14px'}/>
        </article>
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
