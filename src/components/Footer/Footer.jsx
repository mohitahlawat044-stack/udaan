import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  Plus,
  X
} from 'lucide-react';

import logo from '../../assets/logo/udaan-events-logo.png';
import './Footer.css';

export default function Footer() {

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(
      openSection === section ? null : section
    );
  };

  return (
    <footer className="footer">

      {/* ================= FOOTER MAIN ================= */}

      <div className="footer-main container">

        {/* ================= BRAND ================= */}

        <div className="footer-brand">

          <img
            src={logo}
            alt="Udaan Events logo"
          />

          <p>
            Thoughtful planning, creative direction and
            seamless execution for moments worth remembering.
          </p>

          <div className="socials">

            <span
              className="social-placeholder"
              aria-label="Instagram — link to be added"
            >
              <Instagram size={17} />
            </span>

            <span
              className="social-placeholder"
              aria-label="Facebook — link to be added"
            >
              <Facebook size={17} />
            </span>

          </div>

        </div>


        {/* ================= EXPLORE ================= */}

        <div className="footer-column">

          <button
            type="button"
            className="footer-accordion-header"
            onClick={() => toggleSection('explore')}
            aria-expanded={openSection === 'explore'}
          >

            <h3>Explore</h3>

            <span className="accordion-icon">
              {openSection === 'explore' ? (
                <X size={18} />
              ) : (
                <Plus size={18} />
              )}
            </span>

          </button>


          <div
            className={`footer-accordion-content ${
              openSection === 'explore' ? 'open' : ''
            }`}
          >

            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/events">Events</Link>
              <Link to="/contact">Contact</Link>
            </nav>

          </div>

        </div>


        {/* ================= SERVICES ================= */}

        <div className="footer-column">

          <button
            type="button"
            className="footer-accordion-header"
            onClick={() => toggleSection('services')}
            aria-expanded={openSection === 'services'}
          >

            <h3>Services</h3>

            <span className="accordion-icon">
              {openSection === 'services' ? (
                <X size={18} />
              ) : (
                <Plus size={18} />
              )}
            </span>

          </button>


          <div
            className={`footer-accordion-content ${
              openSection === 'services' ? 'open' : ''
            }`}
          >

            <nav>
              <Link to="/services">Weddings</Link>
              <Link to="/services">Corporate Events</Link>
              <Link to="/services">Social Celebrations</Link>
              <Link to="/services">Public Events</Link>
              <Link to="/services">Event Production</Link>
            </nav>

          </div>

        </div>


        {/* ================= CONNECT ================= */}

        <div className="footer-column">

          <button
            type="button"
            className="footer-accordion-header"
            onClick={() => toggleSection('connect')}
            aria-expanded={openSection === 'connect'}
          >

            <h3>Connect</h3>

            <span className="accordion-icon">
              {openSection === 'connect' ? (
                <X size={18} />
              ) : (
                <Plus size={18} />
              )}
            </span>

          </button>


          <div
            className={`footer-accordion-content ${
              openSection === 'connect' ? 'open' : ''
            }`}
          >

            <div className="footer-contact">

              <span>
                <Phone size={15} />
                <span>Phone — to be added</span>
              </span>

              <span>
                <Mail size={15} />
                <span>Email — to be added</span>
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* ================= FOOTER BOTTOM ================= */}

      <div className="footer-bottom container">

        <span>
          © 2026 Udaan Events. All Rights Reserved.
        </span>

        <span>
          Delhi NCR · Event Experiences
        </span>

      </div>

    </footer>
  );
}