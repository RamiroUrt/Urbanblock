import React from 'react'
import Plus from '../../assets/svg/plus-circle-svgrepo-com.svg'
import Play from '../../assets/svg/play-button-svgrepo-com.svg'
import GruaContain from './model/GruaContain'
const AbuotUs = () => {
  return (
    <>
    <div className='body-about'>
        <div className="body-left">
          <h1 className='title title-about'>SOBRE <span>NOSOTROS</span></h1>
              <div className="line"></div>
          <p className='text-about secondary-text'>Somos una empresa líder en el sector de la construcción, con más de tres décadas de experiencia desarrollando proyectos de alta calidad. Nos especializamos en obras residenciales, comerciales e industriales, garantizando seguridad, innovación y un compromiso inquebrantable con nuestros clientes. Nuestra misión es construir espacios duraderos que mejoren la vida de las personas y el entorno.</p>
              <div className="line"></div>
              <div className="about-text-two  secondary-text ">
                <div className="section-body-one">
          <img src={Play} alt="" />
          <p>Combinamos experiencia con las últimas innovaciones en construcción para garantizar resultados de excelencia. Con materiales de alta calidad y técnicas avanzadas que optimizan la eficiencia, seguridad y sostenibilidad de cada obra. Nuestro compromiso es ofrecer soluciones modernas que superen las expectativas de nuestros clientes.</p>
                </div>
                <div className="section-body-one">
          <img src={Plus} alt="" />
          <p>Construimos con responsabilidad, apostando por prácticas sostenibles que minimicen el impacto ambiental. Implementamos materiales ecoamigables, optimizamos el uso de recursos y fomentamos el desarrollo de infraestructuras eficientes. Creemos que el futuro de la construcción está en el equilibrio entre calidad, innovación y respeto por el medio ambiente.</p>
                </div>
              </div>
        </div>
        <div className="body-right">
            <div className="model-contain">
              <GruaContain/>
            </div>
        </div>
    </div>
    </>
  )
}

export default AbuotUs