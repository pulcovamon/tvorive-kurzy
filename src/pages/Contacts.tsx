//import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBus,
  faCar,
  faEnvelope,
  faLocationDot,
  faPhone,
  faUser,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
//import emailjs from "emailjs-com";

const Contacts = ({ isDesktop }: { isDesktop: boolean }) => {
  // function sendEmail(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "YOUR_SERVICE_ID",
  //       "YOUR_TEMPLATE_ID",
  //       e.target as HTMLFormElement,
  //       "YOUR_USER_ID"
  //     )
  //     .then(
  //       () => {
  //         window.location.reload();
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // }

  const mapSize = isDesktop ? "350px" : "300px";
  //const messageTextArea = isDesktop ? "message-desktop" : "message-phone";

  const emailAddress = "tvorive.kurzy.eva@gmail.com";

  return (
    <div className="contacts-page">

      <div className="contacts">
        <div className="contact-details">
          <p>
            <FontAwesomeIcon className="contact-icon" icon={faUser} /> Eva
            Pulcová
          </p>
          <p>
            <Link
              to="https://www.google.com/maps/place/Kutilova,+143+00+Praha+12/@50.012754,14.4187667,17z/data=!3m1!4b1!4m6!3m5!1s0x470b914ca83cd5b5:0x51b714f5f6e41a7!8m2!3d50.012754!4d14.4213416!16s%2Fg%2F1tl_kf5z?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <FontAwesomeIcon className="contact-icon" icon={faLocationDot} />{" "}
              Kutilova xyz, Praha 12 - Modřany, 143 00
            </Link>
          </p>
          <p>
            <Link to="tel:+420123456789">
              <FontAwesomeIcon className="contact-icon" icon={faPhone} />{" "}
              +420 123 456 789
            </Link>
          </p>
          <p>
            <Link to={`mailto:${emailAddress}`}>
              <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
              {` ${emailAddress}`}
            </Link>
          </p>
          <p>
          <Link
                to="https://www.facebook.com/profile.php?id=61557493675613"
                target="_blank"
              >
                <FontAwesomeIcon icon={faSquareFacebook} className="contact-icon"  />{" "}
                Tvořivé kurzy Eva
              </Link>
          </p>
        </div>
      </div>
      
      <div className="contact-map">
        <iframe
          title="Mapa"
          width={mapSize}
          height={mapSize}
          style={{ border: 0 }}
          loading="lazy"
          src="https://maps.google.com/maps?width=350&amp;height=350&amp;hl=en&amp;q=kutilova&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="how-to-get-here">
        <h2>
          Jak se k nám dostanete{" "}
          <FontAwesomeIcon icon={faWalking} />
          </h2>
        <img src="line.png" height="10" width="100%" alt="oddělovač" />

        <p>
          <b>
            <FontAwesomeIcon icon={faBus} />{" "}
            MHD:
          </b>
        </p>
        <ul>
          <li>
            <b>Zastávka Labe:</b> Autobusy 117, 139, 150, 157. Odtud pokračujte
            kolem supermarketu Billa a dále do ulice Kutilova.
          </li>
          <li>
            <b>Zastávka Družná:</b> Autobusy 117, 190, 139, 150, 157. Projděte
            průchodem mezi paneláky do ulice Milerova, pokračujte vlevo do ulice
            Krouzova a dalším průchodem mezi paneláky vpravo do ulice Kutilova.
          </li>
        </ul>

        <p>
        <b>
            <FontAwesomeIcon icon={faCar} />{" "}
            Autem:
          </b>
        </p>
        <ul>
          <li>Parkovat můžete v okolních ulicích, ale bývají často plné.</li>
          <li>
            Alternativně lze zaparkovat v garážích Kauflandu, kde je obvykle
            parkování zdarma na 2 hodiny.
          </li>
        </ul>
      </div>

      {/* <div className="contact-us">
        <h3>Napište nám</h3>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Jméno:</label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Vaše jméno"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Váš email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Zpráva:</label>
            <br />
            <textarea
              className={messageTextArea}
              id="message"
              name="message"
              placeholder="Vaše zpráva"
            />
          </div>
          <button type="submit">Odeslat</button>
        </form>
      </div> */}
    </div>
  );
};

export default Contacts;
