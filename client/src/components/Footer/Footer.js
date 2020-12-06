import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <small>© 2020 Project Access Austria</small>
        <div>
          <a href="https://www.facebook.com/projectaccessaustria">
            <FontAwesomeIcon icon={faFacebookF} className="social" />
          </a>
          <a href="https://www.instagram.com/projectaccess.at/">
            <FontAwesomeIcon icon={faInstagram} className="social" />
          </a>
          <a href="https://www.linkedin.com/company/projectaccess/">
            <FontAwesomeIcon icon={faLinkedinIn} className="social" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
