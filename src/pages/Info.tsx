import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Schedule from "../components/Schedule";

const Info = () => {
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
          začínáte nebo si chcete oprášit starší dovednosti. Kurz je vhodný třeba jako{" "}
          <b>příprava na talentové zkoušky</b>, ale na své si přijdete, i když
          chcete jen v klidu relaxovat po práci, na chvíli opustit starosti
          všedních dní a jen se ponořit do hlubin své tvořivosti.
          <br />
          <br />
          Co se na kurzu naucite?
          <ul className="topics">
              <li>Základy kresby podle předlohy</li>
              <li>Měření</li>
              <li>Stínování</li>
              <li>Perspektiva</li>
              <li>Různé techniky kresby a malby</li>
              <li>Malba v plenéru</li>
            </ul>
            <br/>
          <div className="courses-description">
            <div>
              <b>Věk</b>: od cca 10 let<br/>
              <b>Kapacita:</b> 5–8 studentů <br />
              <br />
              <h1>Kurzy</h1>
              <Schedule courses={[
                {
                  place: "KC Zdiby, každý sudý týden",
                  time: "18:00-20:00",
                  days: ["Tuesday"],
                  price: [3000, 2000]
                },
                {
                  place: "Praha Modřany - Kutilova ulice",
                  time: "17:00-19:00",
                  days: ["Wednesday"],
                  price: [3000, 2000]
                },
                {
                  place: "Praha Modřany - Kutilova ulice",
                  time: "17:00-19:00",
                  days: ["Thursday"],
                  price: [3000, 2000]
                }
              ]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
