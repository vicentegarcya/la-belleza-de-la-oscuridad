import './App.scss';
import React from 'react';
import waterWomen from '../src/images/water-women.png';
import revelacionImg from '../src/images/1_REVELACION.png';
import resistirImg from '../src/images/2_RESISTIR.png';
import rendicionImg from '../src/images/3_RENDICION.png';
import integracionImg from '../src/images/4_INTEGRACION.png';
import iluminarImg from '../src/images/5_ILUMINAR.png';

function App() {
  React.useEffect(() => {
    /* if(window.innerWidth < 768) {
      document.querySelectorAll('section').forEach(e => e.classList.add('hidden'));
      document.querySelector('header').classList.remove('hidden');
    } */

    const cursor = document.querySelector('.cursor');
    const moveCursor = (e) => {
      cursor.style.display = 'block';

      let left = e.pageX;
      let top = e.pageY;

      cursor.style.left = left + 'px';
      cursor.style.top = top + 'px';
    };

    window.addEventListener('mousemove', moveCursor);
    /* window.addEventListener('mouseout', () => cursor.style.display = 'none'); */

    document.querySelectorAll('footer a').forEach(el => {
      el.addEventListener('mouseover', () => {
        el.nextSibling.classList.remove('hidden');
      });
      el.addEventListener('mouseout', () => {
        el.nextSibling.classList.add('hidden');
      });
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header hidden">
        <img src={waterWomen} alt="sky darkness with lightnings"></img>
        <p>
          We are currently working on this website.
        </p>
        <p className='link'>
          In the meantime, you can check <a href="https://www.instagram.com/jimenagonzalez.in/" target="_blank" rel="noreferrer">my Instagram</a>
        </p>
      </header>
      <section className='soon'>
        <h5>s o o n</h5>
        <h4>La belleza de la oscuridad</h4>
      </section>
      <section className='brief'>
        <div>
          <p className='brief-text'>La belleza de la oscuridad es un llamado a conectar con tu guía interior para navegar la dualidad de tu ser. Es una apología de la valentía de las almas sensibles que habitan en este mundo.</p>
          <p className='brief-text'>Su símbolo es el círculo, la crisálida como espacio físico, emocional y espiritual protegido para la alquimia de la sombra.</p>
          <p className='brief-text'>Este oráculo contiene poderosos códigos para transmutar oscuridad en luz, activando profundos niveles de sanación en las diferentes fases y estados. Está dividido en 5 portales de oscuridad y luz: la revelación, el resistir, la rendición, la integración y el iluminar.</p>
          <div className='cursor'></div>
        </div>
        <img className='water-women' src={waterWomen} alt=''></img>
        <div className='water-women-overlay'></div>
      </section>
      <section className='journey-wrapper'>
        <div className='journey-overlay'></div>
        <div className='journey'>
          <div className='journey-step'>
            <img className='journey-img' src={revelacionImg} alt=''></img>
            <div className='journey-title-play'>
              <p>1. R E V E L A C I Ó N</p>
              <a href='https://open.spotify.com/playlist/13hrT38xZa6h9MeIdiBMsZ?si=9e9edd0ff0294cb9' target="_blank" rel="noopener noreferrer"> </a>
            </div>
            <p className='journey-description'>Señales que permiten a la sombra emerger del inconsciente a la luz.</p>
          </div>
          <div className='journey-step'>
            <img className='journey-img' src={resistirImg} alt=''></img>
            <div className='journey-title-play'>
              <p>2. R E S I S T I R</p>
              <a href='https://open.spotify.com/playlist/3DxAov4zfucFtID7kYDTc9?si=14fefe34eee84242' target="_blank" rel="noopener noreferrer"> </a>
            </div>
            <p className='journey-description'>La brecha interna provocada por el rechazo de la oscuridad que aun así conecta con la intención de trascenderla.</p>
          </div>
          <div className='journey-step'>
            <img className='journey-img' src={rendicionImg} alt=''></img>
            <div className='journey-title-play'>
              <p>3. R E N D I C I Ó N</p>
              <a href='https://open.spotify.com/playlist/4VF60a3jUY9tA1p18Ov3Ua?si=19c6454d666a49d1' target="_blank" rel="noopener noreferrer"> </a>
            </div>
            <p className='journey-description'>Soltar el control para permitir que la oscuridad atraviese. Mecerse en amor mientras la sombra purifica.</p>
          </div>
          <div className='journey-step'>
            <img className='journey-img' src={integracionImg} alt=''></img>
            <div className='journey-title-play'>
              <p>4. I N T E G R A C I Ó N</p>
              <a href='https://open.spotify.com/playlist/77fNB8OObqPFGYgAQYK476?si=252ca99c3c094393' target="_blank" rel="noopener noreferrer"> </a>
            </div>
            <p className='journey-description'>Dejar penetrar los aprendizajes y ganar comprensión del proceso, mientras la esperanza y el agradecimiento emergen.</p>
          </div>
          <div className='journey-step'>
            <img className='journey-img' src={iluminarImg} alt=''></img>
            <div className='journey-title-play'>
              <p>5. I L U M I N A R</p>
              <a href='https://open.spotify.com/playlist/0kYSl5ciF9Jos4rc99rg1i?si=b59c2e7901074152' target="_blank" rel="noopener noreferrer"> </a>
            </div>
            <p className='journey-description'>Vivir en armonía con la luz auténtica propia, aprendiendo a protegerla y reflejarla en el mundo.</p>
          </div>
        </div>
      </section>
      <section className='intencion'>
        <a className='saber-mas-btn' href='https://labellezadelaoscuridad.us21.list-manage.com/subscribe?u=9443f17b4f0305d0d0d2aeedf&id=25483bc169' target="_blank" rel="noopener noreferrer"> </a>
        <p className='intencion-text'>Que esta creación sea una expresión auténtica de mi ser,</p>
        <p className='intencion-text'>que pueda inspirar amor incondicional,</p>
        <p className='intencion-text'>un amor que sostiene el dolor de la transformación,</p>
        <p className='intencion-text'>que invita a la aceptación propia,</p>
        <p className='intencion-text'>que permite conectar con el sentido superior, rendirse y confiar.</p>
        <p className='jimena'>Jimena González</p>
      </section>
      <footer>
        <div className='footer-div'>
          <a className='subscribe-icon' href='https://labellezadelaoscuridad.us21.list-manage.com/subscribe?u=9443f17b4f0305d0d0d2aeedf&id=25483bc169' target="_blank" rel="noopener noreferrer"> </a>
          <p className='hidden'>Recibe un mail cuando el oráculo esté disponible</p>
        </div>
        <div className='footer-div'>
          <a className='instagram-icon' href='https://www.instagram.com/jimenagonzalez.in/' target="_blank" rel="noopener noreferrer"> </a>
          <p className='hidden'>Sígueme para estar al tanto de este y otros proyectos</p>
        </div>
        <div className='footer-div'>
          <a className='mail-icon' href='mailto:jimenagonzalez.in@gmail.com'> </a>
          <p className='hidden'>Colaboraciones y más</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
