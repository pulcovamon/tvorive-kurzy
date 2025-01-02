import { faGithub, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = ({ emailAddress }: { emailAddress: string }) => {
  return (
    <div className="footer">
      <div className="footer-links">
        <h1>
          <Link to={`mailto:${emailAddress}`}>
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </h1>
        <h1>
          <Link
            to="https://www.facebook.com/profile.php?id=61557493675613"
            target="_blank"
          >
            <FontAwesomeIcon icon={faSquareFacebook} />
          </Link>
        </h1>
        <h1>
            <Link to="https://github.com/pulcovamon/tvorive-kurzy" >
            <FontAwesomeIcon icon={faGithub} />
            </Link>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
