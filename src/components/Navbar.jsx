import Telefphone from '../assets/svg/telephone-round-svgrepo-com.svg'
import Mail from '../assets/svg/mail-with-circle-svgrepo-com.svg'
import Time from '../assets/svg/time-filled-svgrepo-com.svg'
import Faceboook from '../assets/svg/facebook-svgrepo-com.svg'
import Twitter from '../assets/svg/x-social-media-round-icon.svg'
import Linkedin from '../assets/svg/linkedin-round-svgrepo-com.svg'
import Location from '../assets/svg/location-round-svgrepo-com.svg'
import Logo from '../../public/img/Logo.webp'
import { useState } from 'react'
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
    <header>
      {/* Barra superior */}
      <div className="top-bar">
        <div className="top-bar-left">
            <div className="bar-container">
                <img src={Telefphone} alt="" />
                <p>1-800-555-1234</p>
            </div>
            <div className="bar-container">
              <img src={Mail} alt="" />
              <p>info@emarat.com</p>
            </div>
            <div className="bar-container">
              <img src={Time} alt="" />
              <p>09:00 am - 06:00 pm</p>
            </div>
            <div className="bar-container">
              <img src={Location} alt="" />
              <p>Palermo Bs As</p>
            </div>
        </div>
        <div className="top-bar-right">
        <div className="bar-container redes">
          <img src={Faceboook} alt="" className='facebook-nav' />
          <a href="#">Facebook</a>
        </div>  
        <div className="bar-container redes">
          <img src={Twitter} alt="" />
          <a href="#">Twitter</a>
        </div>  
        <div className="bar-container redes">
          <img src={Linkedin} alt="" />
          <a href="#">Linkedin</a>
        </div> 
        </div>
      </div>

      {/* Menú principal */}
      <nav className="navbar">
        <div className="logo-nav">
          <img src={Logo} alt="" />
        </div>
        <ul className="nav-links">
            <li className="nav-item"><a href="">INICIO</a></li>
            <li className="nav-item"><a href="#nosotros">NOSOTROS</a></li>
            <li className="nav-item"><a href="#servicios">SERVICIOS</a></li>
            <li className="nav-item"><a href="">TIENDA</a></li>
            <li className="nav-item"><a href="#contacto">CONTACTO</a></li>
        </ul>
      </nav>

       {/* Mobile Menu */}
       <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-header">
            <div className="close-button" onClick={toggleMenu} aria-label="Close menu">
            X
            </div>
          </div>
          <div className="mobile-menu-content">
            <a href="#inicio" className="mobile-nav-link">
              INICIO
            </a>
            <a href="#nosotros" className="mobile-nav-link">
              NOSOTROS
            </a>
            <a href="#servicios" className="mobile-nav-link">
              SERVICIOS
            </a>
            <a href="#tienda" className="mobile-nav-link">
              TIENDA
            </a>
            <a href="#contacto" className="mobile-nav-link">
              CONTACTO
            </a>

            {/* Contact Info in Mobile Menu */}
            <div className="mobile-contact">
              <h3 className="mobile-section-title">Contacto</h3>
              <div className="mobile-contact-item">
              <img src={Telefphone} alt="" />
                <p>1-800-555-1234</p>
              </div>
              <div className="mobile-contact-item">
              <img src={Mail} alt="" />
                <p>info@emarat.com</p>
              </div>
              <div className="mobile-contact-item">
              <img src={Time} alt="" />
                <p>09:00 am - 06:00 pm</p>
              </div>
              <div className="mobile-contact-item">
              <img src={Location} alt="" />
                <p>Palermo Bs As</p>
              </div>

              {/* Social Media in Mobile Menu */}
              <div className="mobile-social">
                <a href="#" className="mobile-social-link ">
                <img src={Faceboook} alt="" className='facebook' />
                </a>
                <a href="#" className="mobile-social-link">
                <img src={Twitter} alt="" />
                </a>
                <a href="#" className="mobile-social-link">
                <img src={Linkedin} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      <div className="section-mobile-menu-prev">
        <div className="logo-nav">
            <img src={Logo} alt="" />
          </div>
        <div className="menu-button" onClick={toggleMenu} aria-label="Toggle menu">
            <div className="icon-medium">☰</div>
        </div>
      </div>


    </header>
  );
}
