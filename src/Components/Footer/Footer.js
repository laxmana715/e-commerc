import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

function Footer() {

  const quickLinks = [
    "Home",
    "Collections",
    "Trending",
    "Offers",
    "About",
    "Contact"
  ];

  const categories = [
    "Silk Sarees",
    "Cotton Sarees",
    "Wedding Sarees",
    "Party Wear",
    "Designer Sarees"
  ];

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-box">

          <h2>
            Saree<span>Elegance</span>
          </h2>

          <p>
            We bring elegant and premium saree collections
            for every occasion with quality and tradition.
          </p>

          <div className="social-icons">

            <FaFacebookF />

            <FaInstagram />

            <FaTwitter />

            <FaLinkedin />

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>

            {
              quickLinks.map((link,index)=>(
                <li key={index}>
                  {link}
                </li>
              ))
            }

          </ul>

        </div>

        {/* Categories */}

        <div className="footer-box">

          <h3>Categories</h3>

          <ul>

            {
              categories.map((item,index)=>(
                <li key={index}>
                  {item}
                </li>
              ))
            }

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact</h3>

          <p>

            <FaMapMarkerAlt />

            Hyderabad, Telangana

          </p>

          <p>

            <FaPhoneAlt />

            +91 9876543210

          </p>

          <p>

            <FaEnvelope />

            info@sareeelegance.com

          </p>

        </div>

      </div>

      <div className="copyright">

        © 2026 Saree Elegance |
        All Rights Reserved.

      </div>

    </footer>

  );

}

export default Footer;