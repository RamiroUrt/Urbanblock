import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Logo from '../../../public/img/Logo.webp'


function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
                <h3 className="footer-title">URBANBLOCK</h3>
                <div className="line"></div>
                <img src={Logo} alt="" />
                <p className="footer-description">Construyendo el futuro con calidad y compromiso desde 1985.</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} className="social-img"/>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} className="social-img"/>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} className="social-img"/>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} className="social-img"/>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">Enlaces Rápidos</h3>
            <div className="line"></div>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">Servicios</h3>
            <div className="line"></div>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Construcción Residencial
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Construcción Comercial
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Renovaciones
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Diseño Arquitectónico
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Consultoría
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}

          <div className="footer-section">
            <h3 className="footer-title">Contacto</h3>
            <div className="line"></div>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span className="footer-link">Av. Principal 123, Palermo</span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span  className="footer-link">+123 456 7890</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span  className="footer-link">info@urbanblock.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
        <div className="line"></div>
          <p>© {new Date().getFullYear()} Urbanblock. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

