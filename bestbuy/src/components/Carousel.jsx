import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function carousel() {
  return (
    <Carousel className="pic">
    <div>
        <img alt='' src="./../../nes_1.jpeg"/>
        
    </div>
    <div>
        <img alt='' src="./../../nes_2.jpeg" />
        
    </div>
    <div>
        <img alt='' src={"../../nes_4.jpeg"} />
        
    </div>
    <div>
        <img alt='' src="../../nes_5.jpeg" />
        
    </div>
    <div>
        <img alt='' src="../../nes_6.jpeg" />
        
    </div>
    <div>
        <img alt='' src="../../nes_7.jpeg" />
        
    </div>
    <div>
        <img alt='' src="../../nes_8.jpeg" />
        
    </div>
</Carousel>
  )
}

export default carousel