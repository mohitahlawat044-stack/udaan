import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import './Header.css';
import logo from '../../assets/logo/udaan-events-logo.png';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Events', '/events'],
  ['Contact', '/contact']
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    document.body.classList.remove('menu-open');
  }, [pathname]);

  const toggleMenu = () => {
    setOpen((prev) => !prev);

    document.body.classList.toggle('menu-open');
  };

  return (
    <header
      className={`site-header ${
        scrolled ? 'is-scrolled' : ''
      } ${open ? 'is-open' : ''}`}
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="header-inner container">

        {/* LOGO */}

        <Link
          to="/"
          className="brand"
          aria-label="Udaan Events home"
        >
          <img
            src={logo}
            alt="Udaan Events logo"
          />
        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav
          className="desktop-nav"
          aria-label="Primary navigation"
        >

          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
            >
              {label}
            </NavLink>
          ))}

        </nav>


        {/* =====================================================
            DESKTOP LET'S PLAN BUTTON
        ===================================================== */}

        <Link
          to="/contact"
          className="header-cta desktop-header-cta btn btn-solid"
        >
          Let's Plan
          <ArrowUpRight size={15} />
        </Link>


        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
        </button>

      </div>


      {/* =====================================================
          MOBILE MENU PANEL
      ===================================================== */}

      <div
        className={`mobile-panel ${
          open ? 'show' : ''
        }`}
      >

        <div className="mobile-panel-inner">

          {/* MOBILE MENU HEADER */}

          <div className="mobile-top">

            <span>
              UDAAN EVENTS
            </span>

            <span>
              MENU
            </span>

          </div>


          {/* MOBILE NAVIGATION */}

          <nav aria-label="Mobile navigation">

            {links.map(([label, to], index) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
              >

                <span>
                  0{index + 1}
                </span>

                <strong>
                  {label}
                </strong>

                <ArrowUpRight size={18} />

              </NavLink>
            ))}

          </nav>


          {/* MOBILE CTA */}

          <Link
            to="/contact"
            className="btn btn-solid mobile-plan"
          >
            Let's Plan Your Event
            <ArrowUpRight size={16} />
          </Link>

        </div>

      </div>

    </header>
  );
}