import "./App.scss";
import React from "react";
import card1 from "../src/images/1.jpg";
import card2 from "../src/images/2.jpg";
import card3 from "../src/images/3.jpg";
import card4 from "../src/images/4.jpg";
import card5 from "../src/images/5.jpg";
import card6 from "../src/images/6.jpg";
import card7 from "../src/images/7.jpg";

function App() {
  return (
    <div className="App">
      <div className="proximamente">próximamente</div>
      <div className="explanation">
        <p>
          Un oráculo para quienes no creen en los oráculos, sino en conectar con
          su propia sabiduría interna.
        </p>
        <p>
          Para quienes han trascendido la positividad tóxica y se sumergen con
          valentía en la experiencia completa de la vida.
        </p>
      </div>
      <div className="title_cards">
        <div className="cards">
          <img className="card" src={card1} alt="first card of the deck"></img>
          <img className="card" src={card2} alt="second card of the deck"></img>
          <img className="card" src={card3} alt="third card of the deck"></img>
          <img className="card" src={card4} alt="fourth card of the deck"></img>
          <img className="card" src={card5} alt="fifth card of the deck"></img>
          <img className="card" src={card6} alt="sixth card of the deck"></img>
          <img
            className="card"
            src={card7}
            alt="seventh card of the deck"
          ></img>
        </div>
        <div className="title">La belleza<br></br> de la oscuridad</div>
      </div>
      <div className="creadores_desktop">
        <p className="supreme">
          Un proyecto del<br></br>ecosistema SPRM BNGS
        </p>
        <div>
          <a
            href="mailto:contacto@labellezadelaoscuridad.com"
            target="_blank"
            rel="noreferrer"
          >
            contacto@labellezadelaoscuridad.com
          </a>
          <p className="jimena">JIMENA GONZALEZ</p>
        </div>
        <p className="carlos">
          Arte por<br></br>Carlos Fama
        </p>
      </div>
      <div className="creadores_mobile">
        <div>
          <p className="jimena">JIMENA GONZALEZ</p>
          <a
            href="mailto:contacto@labellezadelaoscuridad.com"
            target="_blank"
            rel="noreferrer"
          >
            contacto@labellezadelaoscuridad.com
          </a>
        </div>
        <div>
          <p className="supreme">
            Un proyecto <br></br>del ecosistema <br></br>SPRM BNGS
          </p>
          <p className="carlos">
            Arte por<br></br>Carlos Fama
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
