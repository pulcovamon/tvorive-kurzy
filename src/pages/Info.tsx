import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fireConfetti from "../utils/confetti";

const Info = () => {
  return (
    <div className="info-page">
      <div className="text-container-courses">
        <div className="text-inside-container-info">
          <h1>
            <b>Kurz kresby a malby</b>{" "}
            <FontAwesomeIcon icon={faPalette} />
          </h1>
          <img src="line.png" height={10} width={"100%"} alt="Čára oddělující text" />
          <i>
            Pro ty, co si chtějí zkusit něco nového, i jako příprava na talentové zkoušky.
          </i> 
          <br />
          <br />
          <div className="courses-description">
            <div>
              <b>Cena:</b> 3000 Kč za <i>n</i> lekcí <br />
              <b>Kde:</b> Praha <br />
              <b>Kdy:</b> Každé liché úterý 18:00–20:00 <br />
              <b>Kapacita:</b> 5–8 studentů <br />
              <br />
              <div className="free-lesson" onMouseEnter={fireConfetti}>
              <b>Ukázková hodina zdarma 19. 9. 2024</b>
              </div>
            </div>
            <br />
            <ul className="topics">
              <li>Základy kresby podle předlohy</li>
              <li>Měření</li>
              <li>Stínování</li>
              <li>Perspektiva</li>
              <li>Různé techniky kresby a malby</li>
              <li>Malba v plenéru</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
