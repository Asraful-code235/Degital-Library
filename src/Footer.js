import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className="Footer-container">
      <div className="Footer-info">
        <ul>
          <li>Md.Asraful Islam</li>
          <li>Md.Shoab Nur Asif</li>
          <li>Md.Masfiqur Rahman</li>
          <li>Md.Rasel Mahamud</li>
          <li>Contanct: Shoagasraful@gmail.com</li>
        </ul>
      </div>
      <div className="licence">
        <div className="icons-container">
          <div className="facebook-icon">
            <a href="#">
              <FaFacebookSquare
                className="fa-icon"
                color="#fff"
                fontSize="1.5rem"
              />
            </a>
          </div>
          <div className="linkedin-icon">
            <a href="#">
              <FaLinkedin
                className="fa-icon"
                margin="10px"
                color="#fff"
                fontSize="1.5rem"
              />
            </a>
          </div>
          <div className="twitter-icon">
            <a href="#">
              <FaTwitter className="fa-icon" color="#fff" fontSize="1.5rem" />
            </a>
          </div>
        </div>
        <h3>Copyright @ 2021</h3>
      </div>
    </div>
  );
}

export default Footer;
