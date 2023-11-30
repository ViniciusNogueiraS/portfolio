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

  const {
    isDarkTheme,
    setIsDarkTheme,
    isSkeleton,
    setIsSkeleton
  } = useContext(ThemeContext);

  return (
    <div className={`App ${isDarkTheme ? 'dark' : 'light'}`}>
      <header>
        <Perfil/>
        <div className="FixedPanel">
          <button className={`btn ${isDarkTheme ? 'active' : ''}`}
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_537_191)">
              <path d="M12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5Z" stroke="white" stroke-width="1.91" stroke-miterlimit="10"/>
              <path d="M8.66 22C10.7741 21.3163 12.6171 19.9801 13.9244 18.1834C15.2316 16.3867 15.9358 14.2219 15.9358 12C15.9358 9.77807 15.2316 7.6133 13.9244 5.81661C12.6171 4.01992 10.7741 2.68375 8.66 2" stroke="white" stroke-width="1.91" stroke-miterlimit="10"/>
              </g>
              <defs>
              <clipPath id="clip0_537_191">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
            </svg>
          </button>
          <button className={`btn ${isSkeleton ? 'active' : ''}`}
            onClick={() => setIsSkeleton(!isSkeleton)}
          >
            <svg width="422" height="512" viewBox="0 0 422 512" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M140.029 199.251C114.826 199.251 94.407 219.685 94.407 244.888C94.407 270.091 114.825 290.515 140.029 290.515C165.223 290.515 185.657 270.091 185.657 244.888C185.657 219.685 165.223 199.251 140.029 199.251Z" fill="white"/>
              <path d="M281.971 199.251C256.783 199.251 236.349 219.685 236.349 244.888C236.349 270.091 256.783 290.515 281.971 290.515C307.165 290.515 327.599 270.091 327.599 244.888C327.599 219.685 307.165 199.251 281.971 199.251Z" fill="white"/>
              <path d="M236.103 310.79L211.008 271.575L185.909 310.79C178.071 323.337 204.729 339.021 211.008 312.353C217.282 339.021 243.929 323.338 236.103 310.79Z" fill="white"/>
              <path d="M132.687 365.194V390.21H160.063V353.706H144.18C137.823 353.706 132.687 358.861 132.687 365.194Z" fill="white"/>
              <path d="M203.142 353.706H175.771V390.21H203.142V353.706Z" fill="white"/>
              <path d="M246.235 353.706H218.859V390.21H246.235V353.706Z" fill="white"/>
              <path d="M277.826 353.706H261.944V390.21H289.324V365.194C289.324 358.861 284.178 353.706 277.826 353.706Z" fill="white"/>
              <path d="M132.687 426.366C132.687 432.729 137.823 437.854 144.181 437.854H160.063V401.361H132.687V426.366Z" fill="white"/>
              <path d="M203.142 401.362H175.771V437.855H203.142V401.362Z" fill="white"/>
              <path d="M246.235 401.362H218.859V437.855H246.235V401.362Z" fill="white"/>
              <path d="M261.944 437.855H277.826C284.178 437.855 289.324 432.73 289.324 426.367V401.362H261.944V437.855Z" fill="white"/>
              <path d="M372.751 75.551L372.771 75.541C358.957 58.363 339.414 39.453 312.795 24.848C286.187 10.222 252.503 -0.00999268 211.008 7.32347e-06C169.497 -0.00999268 135.819 10.222 109.205 24.848C82.583 39.453 63.045 58.363 49.235 75.541C18.377 114.073 0.0510278 164.242 -0.00897217 211.006V316.203C0.00602783 324.485 2.07903 333.163 5.63703 341.762C10.999 354.636 19.742 367.401 31.033 377.682C40.577 386.371 52.045 393.298 64.879 396.552V418.589C64.905 426.862 67.462 436.717 73.127 447.257C78.806 457.765 87.683 468.887 100.507 479.08C119.723 494.377 154.609 512.041 211.007 512.001C267.395 512.041 302.286 494.377 321.492 479.08C334.326 468.888 343.183 457.766 348.862 447.257C354.522 436.718 357.095 426.863 357.115 418.589V396.552C375.005 392.021 390.184 380.383 401.366 366.669C407.699 358.861 412.805 350.362 416.368 341.763C419.91 333.164 421.988 324.486 422.008 316.204V211.006C421.95 164.242 403.624 114.072 372.751 75.551ZM389.434 316.203C389.434 332.866 367.526 365.966 341.7 365.966C336.109 365.966 330.33 364.413 324.562 360.81C324.562 360.81 324.562 406.428 324.562 418.588C324.562 430.77 300.219 479.434 211.008 479.434C121.778 479.434 97.45 430.77 97.45 418.588C97.45 406.428 97.45 360.81 97.45 360.81C91.666 364.412 85.892 365.966 80.296 365.966C54.48 365.966 32.552 332.866 32.552 316.203C32.552 295.907 32.552 279.956 32.552 211.006C32.552 142.066 85.289 32.566 211.008 32.566C336.723 32.566 389.434 142.066 389.434 211.006C389.434 279.956 389.434 295.907 389.434 316.203Z" fill="white"/>
            </svg>
          </button>
        </div>
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
                items: 1
              },
              1024: {
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
