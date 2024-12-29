import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

const Contacts: React.FC = () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          window.location.reload()
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="contacts-page">
      <div>
      <h2>Kontakty</h2>

      <div className="contact-details">
        <p><strong>Adresa:</strong> Ulice 123, Město, PSČ</p>
        <p><strong>Telefon:</strong> +420 123 456 789</p>
        <p><strong>Email:</strong> tvorive.kurzy.eva@gmail.com</p>
        <div className="social-links">
        <h1>
          <Link to="https://www.facebook.com/profile.php?id=61557493675613" target="_blank">
          <FontAwesomeIcon icon={faSquareFacebook} />
          </Link>
          </h1>
          <h1>
          <Link to="mailto:tvorive.kurzy.eva@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          </h1>
        </div>
      </div>
      
      <div className="contact-map">
        <iframe
          title="Mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9924620231546!2d14.420460315290437!3d50.087572779424095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDDsDA1JzE1LjIiTiAxNMKwMjUnMDAuMSJF!5e0!3m2!1scs!2scz!4v1698313127609!5m2!1scs!2scz"
          width="100%"
          height="300"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>
      </div>

      <div className="contact-us">
        <h3>Napište nám</h3>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Jméno:</label>
            <input type="text" id="name" name="user_name" placeholder="Vaše jméno" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="user_email" placeholder="Váš email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Zpráva:</label>
            <br />
            <textarea id="message" name="message" placeholder="Vaše zpráva" />
          </div>
          <button type="submit">Odeslat</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
