import { faHandPointLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMe = () => {
  return (
    <div className="info-page">
      <div className="text-inside-container-info">
        <div className="lecturer">
          <img className="avatar" src="profile-pic.jpg" alt="Profilová fotografie" />
          <div className="lecturer-intro">
            <h1 className="course-title">
              O mně <FontAwesomeIcon icon={faHandPointLeft} />
            </h1>
            <img
              src="line.png"
              alt="Oddělovač"
              height={10}
              width="100%"
              loading="lazy"
            />
            <p className="intro-text">
              Ahoj, jmenuji se Eva a ráda bych vás provedla světem kreslení a
              malování.
              <br />
              <br />S výukou kresby a malby mám více než deset let zkušeností, o
              které se ráda podělím i s Vámi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
