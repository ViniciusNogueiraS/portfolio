import React from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Perfil from './components/Perfil';
import Experiencia from './components/Experiencia';
import Projeto from './components/Projeto';
import Skill from './components/Skill';
import Footer from './components/Footer';

import { experiencias, projetos, skills } from './services/data';

function App() {

  return (
    <div className="App">
      <header>
        <Perfil/>
      </header>
      <div className="Body"
        style={{
           fontSize: '20px'
        }}
      >
        <article className="Experiencias">
          <h3>Experiências</h3>
          {experiencias.map(exp => (
            <Experiencia {...exp}/>
          ))}          
        </article>
        <article className="Projetos">
          <h3>Projetos</h3>
          <AliceCarousel
            mouseTracking
            infinite={true}
            disableDotsControls={false}
            disableButtonsControls={true}
            responsive={{
              0: {
                items: 2
              }
            }}
            items={projetos.map(pjt => (
              <Projeto {...pjt}/>
            ))}
          />
        </article>
        <article className="Skills">
          <h3>Skills</h3>
          {skills.map(skl => (
            <Skill {...skl}/>
          ))}
        </article>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
