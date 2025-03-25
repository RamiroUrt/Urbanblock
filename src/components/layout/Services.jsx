import React from 'react'
import Card from '../Card/Card'
import cardsData from '../../assets/constant/constants'


const Services = () => {
  return (
    <section className="services-body">
        <div className="cube-content">
        <div className="cube">
        <h1 className='title title-services'>SERVICIOS</h1>
        <div className="line"></div>
        <div className="services-contain">
        {cardsData.map((card, index) => (
              <Card 
                key={index} 
                img={card.img} 
                item1={card.item1} 
                item2={card.item2} 
                item3={card.item3} 
                item4={card.item4} 
              />
            ))}
        </div>
        </div>
        <div className="button-hero-content button-about-content">
          <button>CONTACTANOS</button>
        </div>
        </div>
    </section>
  )
}

export default Services