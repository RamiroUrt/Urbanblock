import React from 'react'
import Navbar from '../Navbar'
import Logo from '../../../public/img/Logo.webp'
import AbuotUs from './AbuotUs'
import Services from './Services'
import ContactUs from './ContactUs'
import FlowingMenu from '../FlowingMenu/FLowingMenu'
import Menu from '../FlowingMenu/Menu'
import Footer from './Footer'
import Counter from '../Counterp/Counter'

const Hero = () => {
  return (
    <>      
    <section className="hero" id='inicio'>
        <Navbar/>
    <div className="body-hero">
              <div className="container"> 
        <div className="hero-content-logo">
                <img src={Logo} alt="" />
                <h1>URBANBLOCK</h1>
                <p>-CONSTRUCTORA-</p>
                <div className="button-hero-content">
                  <button>CONTACTANOS</button>
                  <button>CONOCENOS</button>
                </div>
            </div>
        </div>
    </div>
    </section>
    <Menu />
    <section className="about" id="nosotros">
      <AbuotUs />
    </section>
    <section className="counter">
      <Counter />
    </section>
    <section className="services" id='servicios'>
      <Services />
    </section>
    <section className="contact-us" id='contacto'>
      <ContactUs />
    </section>
    <section className="footer">
      <Footer/>
    </section>
    </>
  )
}

export default Hero
