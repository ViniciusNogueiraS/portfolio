import React, { useContext } from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Perfil from './components/Perfil';
import Experiencia from './components/Experiencia';
import Projeto from './components/Projeto';
import Skill from './components/Skill';
import Footer from './components/Footer';

import { experiencias, projetos, skills } from './services/data';

import { ThemeContext } from './contexts/ThemeContextProvider';

function App() {

  const {isDarkTheme, setIsDarkTheme} = useContext(ThemeContext);

  return (
    <div className={`App ${isDarkTheme ? 'dark' : 'light'}`}>
      <header>
        <Perfil/>
            <button
              onClick={() => setIsDarkTheme(!isDarkTheme)}
            >
              TESTE
            </button>
      </header>
      <div className="Body"
        style={{
          fontSize: '20px'
        }}
      >
        <article className={`Experiencias ${isDarkTheme ? 'dark' : 'light'}`}>
          <h3 className={`${isDarkTheme ? 'dark' : 'light'}`}>Experiências</h3>
          {experiencias.map(exp => (
            <Experiencia {...exp}/>
          ))}          
        </article>
        <article className={`Projetos ${isDarkTheme ? 'dark' : 'light'}`}>
          <h3 className={`${isDarkTheme ? 'dark' : 'light'}`}>Projetos</h3>
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
        <article className={`Skills ${isDarkTheme ? 'dark' : 'light'}`}>
          <h3 className={`${isDarkTheme ? 'dark' : 'light'}`}>Skills</h3>
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
