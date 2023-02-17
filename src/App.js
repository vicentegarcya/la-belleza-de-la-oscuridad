import './App.scss';
import waterWomen from '../src/images/water-women.jpeg';
import revelacionImg from '../src/images/1_REVELACION.png';
import resistirImg from '../src/images/2_RESISTIR.png';
import rendicionImg from '../src/images/3_RENDICION.png';
import integracionImg from '../src/images/4_INTEGRACION.png';
import iluminarImg from '../src/images/5_ILUMINAR.png';
import mariposa from '../src/images/mariposa-left.jpeg';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={darkness} alt="sky darkness with lightnings"></img>
        <p>
          We are currently working on this website.
        </p>
        <p className='link'>
          In the meantime, you can check <a href="https://www.instagram.com/soyjimenagonz_/" target="_blank" rel="noreferrer">my Instagram</a>
        </p>
      </header> */}
      <section className='soon'>
        <h5>s o o n</h5>
        <h4>la belleza de la oscuridad</h4>
      </section>
      <section className='brief'>
        <div>
          <p className='brief-text'>La belleza de la oscuridad es un llamado a conectar con tu guía interior para navegar la dualidad de tu ser. Es una apología de la valentía de las almas sensibles que habitan en este mundo.</p>
          <p className='brief-text'>Su símbolo es el círculo, la crisálida como espacio físico, emocional y espiritual protegido para la alquimia de la sombra.</p>
          <p className='brief-text'>Este oráculo contiene poderosos códigos para transmutar oscuridad en luz, activando profundos niveles de sanación en las diferentes fases y estados. Está dividido en 5 portales de oscuridad y luz: la revelación, el resistir, la rendición, la integración y el iluminar.</p>
        </div>
        <img className='water-women' src={waterWomen} alt=''></img>
        <div className='water-women-overlay'></div>
      </section>
      <section className='journey'>
        <div className='journey-step'>
          <img className='journey-img' src={revelacionImg} alt=''></img>
          <div className='journey-title-play'>
            <p>1. R E V E L A C I Ó N</p>
            <a href='https://open.spotify.com/playlist/13hrT38xZa6h9MeIdiBMsZ?si=9e9edd0ff0294cb9'> </a>
          </div>
          <p className='journey-description'>Señales que permiten a la sombra emerger del inconsciente a la luz.</p>
        </div>
        <div className='journey-step'>
          <img className='journey-img' src={resistirImg} alt=''></img>
          <div className='journey-title-play'>
            <p>2. R E S I S T I R</p>
            <a href='https://open.spotify.com/playlist/3DxAov4zfucFtID7kYDTc9?si=14fefe34eee84242'> </a>
          </div>
          <p className='journey-description'>La brecha interna provocada por el rechazo de la oscuridad que aun así conecta con la intención de trascenderla.</p>
        </div>
        <div className='journey-step'>
          <img className='journey-img' src={rendicionImg} alt=''></img>
          <div className='journey-title-play'>
            <p>3. R E N D I C I Ó N</p>
            <a href='https://open.spotify.com/playlist/4VF60a3jUY9tA1p18Ov3Ua?si=19c6454d666a49d1'> </a>
          </div>
          <p className='journey-description'>Soltar el control para permitir que la oscuridad atraviese. Mecerse en amor mientras la sombra purifica.</p>
        </div>
        <div className='journey-step'>
          <img className='journey-img' src={integracionImg} alt=''></img>
          <div className='journey-title-play'>
            <p>4. I N T E G R A C I Ó N</p>
            <a href='https://open.spotify.com/playlist/77fNB8OObqPFGYgAQYK476?si=252ca99c3c094393'> </a>
          </div>
          <p className='journey-description'>Dejar penetrar los aprendizajes y ganar comprensión del proceso, mientras la esperanza y el agradecimiento emergen.</p>
        </div>
        <div className='journey-step'>
          <img className='journey-img' src={iluminarImg} alt=''></img>
          <div className='journey-title-play'>
            <p>5. I L U M I N A R</p>
            <a href='https://open.spotify.com/playlist/0kYSl5ciF9Jos4rc99rg1i?si=b59c2e7901074152'> </a>
          </div>
          <p className='journey-description'>Vivir en armonía con la luz auténtica propia, aprendiendo a protegerla y reflejarla en el mundo.</p>
        </div>
      </section>
      <section className='intencion'>
        <img className='mariposa-left' alt='' src={mariposa}></img>
        <p className='intencion-text'>Que esta creación sea una expresión auténtica de mi ser</p>
        <p className='intencion-text'>que pueda inspirar amor incondicional,</p>
        <p className='intencion-text'>un amor que sostiene el dolor de la transformación,</p>
        <p className='intencion-text'>que invita a la aceptación propia,</p>
        <p className='intencion-text'>que permite conectar con el sentido superior, rendirse y confiar.</p>
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
