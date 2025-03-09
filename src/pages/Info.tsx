import {
  faArrowUpRightFromSquare,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { emailAddress } from "./Contacts";

function Info() {
  const courses = [
    {
      name: "Kurz kresby a malby Modřany",
      day: "Středa",
      time: "17:00-19:00",
      place: (
        <Link to="https://en.frame.mapy.cz/s/cucahujopo" target="_blank">
          Praha - Kutilova <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      ),
    },
    {
      name: "Kurz kresby a malby Modřany",
      day: "Čtvrtek",
      time: "14:15-16:15",
      place: (
        <Link to="https://en.frame.mapy.cz/s/cucahujopo" target="_blank">
          Praha - Kutilova <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      ),
    },
    {
      name: "Kurz kresby a malby Zdiby",
      day: "Každé sudé úterý",
      time: "18:00-20:00",
      place: (
        <Link to="https://en.mapy.cz/s/jocekunute" target="_blank">
          KC Zdiby <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Link>
      ),
    },
  ];
  return (
    <div className="info-page">
      <div className="text-container-courses">
        <div className="text-inside-container-info">
          <h1>
            <b>Kurz kresby a malby</b> <FontAwesomeIcon icon={faPalette} />
          </h1>
          <img
            src="line.png"
            height={10}
            width={"100%"}
            alt="Čára oddělující text"
          />
          <i>
            Chcete se naučit kreslit, ale myslíte si, že je to příliš obtížné?
            Omyl, kreslit se opravdu může naučit každý, kdo chce, stačí vědět,
            jak na to. A přesně to Vám ukážu.
          </i>
          <br />
          <br />V rámci kurzu se naučíte <b>
            techniku kresby podle modelu
          </b>, <b>měření</b>, <b>stínování</b> a <b>perspektivu</b>, ale
          vyzkoušíte si i <b>práci s barvami</b> a různé výtvarné techniky, o
          kterých jste dosud možná jen slyšeli.
          <br />
          <br />
          Kurz je určen starším dětem i dospělým a je jedno, jestli s kreslením
          začínáte nebo si chcete oprášit starší dovednosti. Kurz je vhodný
          třeba jako <b>příprava na talentové zkoušky</b>, ale na své si
          přijdete, i když chcete jen v klidu relaxovat po práci, na chvíli
          opustit starosti všedních dní a jen se ponořit do hlubin své
          tvořivosti.
          <br />
          <br />
          <h2>Co se na kurzu naučíte?</h2>
          <ul className="topics">
            <li>Základy kresby podle předlohy</li>
            <li>Měření</li>
            <li>Stínování</li>
            <li>Perspektiva</li>
            <li>Různé techniky kresby a malby</li>
            <li>Malba v plenéru</li>
          </ul>
          <div className="courses-description">
            <h2>Co potřebujete vědět?</h2>
            <div>
              <b>Věk</b>: od cca 10 let
              <br />
              <b>Kapacita:</b> 5–8 studentů <br />
              <b>Cena:</b> 3000 kč (3 měsíce) / 2000 kč (2 měsíce) <br />
              <b>Přihlašování:</b>{" "}
              <Link to="https://forms.gle/jzHdaYo6HAZVqGqBA" target="_blank">
                Přihlašovací formulář{" "}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>{" "}
              <br />
              <div className="cards">
                {courses.map((course) => {
                  return (
                    <div className="course-card">
                      <h4>{course.name}</h4>
                      <b>Kde:</b> {course.place} <br />
                      <b>Kdy:</b> {course.day} <br />
                      <b>V kolik:</b> {course.time} <br />
                    </div>
                  );
                })}
              </div>
              Pokud máte jakékoli otázky, neváhejte se mi ozvat na email <Link to={`mailto:${emailAddress}`}>{` ${emailAddress}`}</Link>.
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
