import './App.scss';
import crisalida from '../src/images/crisalida.png';
import waterWomen from '../src/images/water-women.jpeg';

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
        <p className='brief-text'>La belleza de la oscuridad es un llamado a conectar con tu guía interior para navegar la dualidad de tu ser. Es una apología de la valentía de las almas sensibles que habitan en este mundo.
        <br></br>
        <br></br>
        Su símbolo es el círculo, la crisálida como espacio físico, emocional y espiritual protegido para la alquimia de la sombra.
        <br></br>
        <br></br>
        Este oráculo contiene poderosos códigos para transmutar oscuridad en luz, activando profundos niveles de sanación en las diferentes fases y estados. Está dividido en 5 portales de oscuridad y luz: la revelación, el resistir, la rendición, la integración y el iluminar.</p>
        <img className='crisalida' src={crisalida} alt=''></img>
        <img className='water-women' src={waterWomen} alt=''></img>
        <div className='water-women-overlay'></div>
      </section>
      <section className='journey'>

      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
