import React from 'react'
import IdeaGif from '../../assets/gif/lightbulb.gif'
import Diseñar from '../../assets/gif/DesignV2.gif'
import Minecrft from '../../assets/gif/Minecraft.gif'
import From from '../Fromulario/From'
const ContactUs = () => {
  return (
    <div className='about-body'>
        <div className="title-contain">
            <h1 className='title title-about'>CONTÁCTANOS</h1>
            <div className="line"></div>
        </div>
            <div className="contain-about">
                <div className="left-about">
                  <div className="section-one">
                    <h2>CUENTANOS TU IDEA</h2>
                    <img src={IdeaGif} alt="" />
                  </div>
                  <div className="section-one">
                    <img src={Diseñar} alt="" />
                    <h2>TAZAMOS TU IDEA</h2>
                  </div>
                  <div className="section-one">
                    <h2>HACEMOS REALIDAD TU IDEA</h2>
                    <img src={Minecrft} alt="" />
                  </div>
                </div>
            <div className="about-form">
              <From/>
            </div>
            </div>
            <div className="line"></div>
    </div>
  )
}

export default ContactUs