import React from 'react'

import 'atropos/css'
import Atropos from 'atropos/react';

const Card = ({img,item1,item2,item3,item4}) => {
  return (
    <>
    <Atropos className='my-atropos'
    shadow={true}
    activeOffset={20}
      rotateXMax={25}  
      rotateYMax={25}
      highlight={true} >
    <div className='card-body-contain'>
        <div className="card-img">
            <img src={img} alt="" data-atropos-offset="25" />
        </div>
        <div className="card-body secondary-text ">
            <li data-atropos-offset="-5">{item1}</li>
            <li data-atropos-offset="-5">{item2}</li>
            <li data-atropos-offset="-5">{item3}</li>
            <li data-atropos-offset="-5">{item4}</li>
        </div>
    </div>
    </Atropos>
    </>
  )
}

export default Card            
