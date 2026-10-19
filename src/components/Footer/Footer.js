
import './Footer.css';

import {
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2>MyShop</h2>
          <p>
            We provide the best products and services
            to make your life easier and better.
          </p>

          <div className="footer-social">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://twitter.com"
              aria-label="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>

          <p>
            <MapPin />
            <span>Your Address</span>
          </p>

          <p>
            <Phone />
            <span>Your Phone Number</span>
          </p>

          <p>
            <Mail />
            <span>your@email.com</span>
          </p>
        </div>

        <div className="footer-subscribe">
          <h3>Subscribe</h3>
          <p>Get the latest updates and offers.</p>

          <form
            className="subscribe-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
              required
            />

            <button type="submit">Subscribe</button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 MyShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
