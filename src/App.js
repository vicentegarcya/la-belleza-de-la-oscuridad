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
      <div className="proximamente">PRÓXIMAMENTE</div>
      <div className="title">La belleza de la oscuridad</div>
      <div className="cards">
        <img className="card" src={card1} alt="first card of the deck"></img>
        <img className="card" src={card2} alt="second card of the deck"></img>
        <img className="card" src={card3} alt="third card of the deck"></img>
        <img className="card" src={card4} alt="fourth card of the deck"></img>
        <img className="card" src={card5} alt="fifth card of the deck"></img>
        <img className="card" src={card6} alt="sixth card of the deck"></img>
        <img className="card" src={card7} alt="seventh card of the deck"></img>
      </div>
      <div className="explanation">
        La belleza de la oscuridad es un oráculo para quienes no creen en los
        oráculos, sino en conectar con su propia sabiduría interna.
      </div>
      <div className="creadores_desktop">
        <p className="supreme">
          un proyecto del<br></br>ecosistema SPRM BNGS
        </p>
        <p className="jimena">JIMENA GONZALEZ</p>
        <p className="carlos">
          arte por<br></br>Carlos Fama
        </p>
      </div>
      <div className="creadores_mobile">
        <p className="jimena">JIMENA GONZALEZ</p>
        <div>
          <p className="supreme">
            un proyecto <br></br>del ecosistema <br></br>SPRM BNGS
          </p>
          <p className="carlos">
            arte por<br></br>Carlos Fama
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
