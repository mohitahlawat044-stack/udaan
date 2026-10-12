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

const whatsappUrl = 'https://wa.me/919599696988?text=Hi%20Udaan%20Events%2C%20I%20want%20to%20plan%20an%20event.';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    document.body.classList.remove('menu-open');
  }, [pathname]);

  const toggleMenu = () => {
    setOpen(prev => {
      document.body.classList.toggle('menu-open', !prev);
      return !prev;
    });
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="header-inner container">
        <Link to="/" className="brand" aria-label="Udaan Events home">
          <img src={logo} alt="Udaan Events logo" />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, to]) => (
            <NavLink key={to} to={to} end={to === '/'}>
              {label}
            </NavLink>
          ))}
        </nav>

        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="header-cta desktop-header-cta btn btn-solid">
          Let's Plan
          <ArrowUpRight size={15} />
        </a>

        <button type="button" className="menu-toggle" onClick={toggleMenu} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <div className={`mobile-panel ${open ? 'show' : ''}`}>
        <div className="mobile-panel-inner">
          <div className="mobile-top">
            <span>UDAAN EVENTS</span>
            <span>MENU</span>
          </div>

          <nav aria-label="Mobile navigation">
            {links.map(([label, to], index) => (
              <NavLink key={to} to={to} end={to === '/'}>
                <span>0{index + 1}</span>
                <strong>{label}</strong>
                <ArrowUpRight size={18} />
              </NavLink>
            ))}
          </nav>

          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-solid mobile-plan">
            Let's Plan Your Event
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}