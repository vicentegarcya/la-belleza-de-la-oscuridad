import "./App.scss";
import { useEffect, useRef, useState } from "react";
import card1 from "../src/images/1.jpg";
import card2 from "../src/images/2.jpg";
import card3 from "../src/images/3.jpg";
import card4 from "../src/images/4.jpg";
import card5 from "../src/images/5.jpg";
import card6 from "../src/images/6.jpg";
import card7 from "../src/images/7.jpg";

function App() {
  const proximamenteRef = useRef();
  const explanationRef = useRef();
  const titleRef = useRef();
  const creadoresRef = useRef();
  const cardsRef = useRef();
  const fakeScrollRef = useRef();

  const [text, setText] = useState(`title`);

  useEffect(() => {
    fakeScrollRef.current.addEventListener("scroll", () => {
      if (fakeScrollRef.current.scrollTop > 0) {
        setText("contacto");
      } else {
        setText("title");
      }
    });

    setTimeout(() => proximamenteRef.current.classList.remove("hidden"), 500);
    setTimeout(() => titleRef.current.classList.remove("hidden"), 1000);
    setTimeout(() => {
      explanationRef.current.querySelectorAll("p").forEach((e) => {
        e.classList.remove("hidden");
      });
      creadoresRef.current.classList.remove("hidden");
    }, 2000);
    setTimeout(() => cardsRef.current.classList.remove("hidden"), 2000);
    setTimeout(() => {
      cardsRef.current.querySelectorAll(".card").forEach((e) => {
        e.classList.remove("hidden");
      });
    }, 4000);
  }, []);

  return (
    <div className="App">
      <div ref={proximamenteRef} className="proximamente hidden">
        próximamente
      </div>
      <div ref={explanationRef} className="explanation">
        <p className="hidden">
          Un oráculo para quienes no creen en los oráculos, sino en conectar con
          su propia sabiduría interna.
        </p>
        <p className="hidden">
          Para quienes han trascendido la positividad tóxica y<br></br> se
          sumergen con valentía en la experiencia de la vida.
        </p>
      </div>
      <div className="title_cards">
        <div ref={cardsRef} className="cards hidden">
          <img
            className="card hidden"
            src={card1}
            alt="first card of the deck"
          ></img>
          <img
            className="card hidden"
            src={card2}
            alt="second card of the deck"
          ></img>
          <img
            className="card hidden"
            src={card3}
            alt="third card of the deck"
          ></img>
          <img className="card" src={card4} alt="fourth card of the deck"></img>
          <img
            className="card hidden"
            src={card5}
            alt="fifth card of the deck"
          ></img>
          <img
            className="card hidden"
            src={card6}
            alt="sixth card of the deck"
          ></img>
          <img
            className="card hidden"
            src={card7}
            alt="seventh card of the deck"
          ></img>
          <div className="cards_overlay"></div>
        </div>
        <a
          ref={titleRef}
          className="title hidden"
          href="mailto:contacto@labellezadelaoscuridad.com"
        >
          {text === "title" ? (
            <>
              La belleza<br></br> de la oscuridad
            </>
          ) : (
            <div className="title_contacto">
              <p>
                contacto@labellezadelaoscuridad.com
              </p>
            </div>
          )}
        </a>
      </div>
      <div className="footer">
        <div ref={creadoresRef} className="creadores_desktop hidden">
          <p className="supreme">
            Un proyecto del<br></br>ecosistema SPRM BNGS
          </p>
          <div>
            <p className="jimena">JIMENA GONZALEZ</p>
          </div>
          <p className="carlos">
            Arte por<br></br>Carlos Fama
          </p>
        </div>
        <p>
          * El arte de esta página es una muestra ilustrativa. Las ilustraciones
          de la baraja reflejarán una mayor diversidad étnica y racial, corporal
          y de género.
        </p>
      </div>
      <div ref={fakeScrollRef} className="fake_scroll">
        <div></div>
      </div>
    </div>
  );
}

export default App;
