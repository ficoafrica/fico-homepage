import React from 'react'
import Choose from './Choose'
import FeatProd from './FeatProd';
import img from '../../img/home/bg-img.jpg'
import image from '../../img/home/bg-image.png'
import './home.css'

const Combined = () => {
  return (
    <section className='h-[900px] lg:h-[800px] max-w-[1200px] mx-auto'>
      <div className='home-overlay h-[900px] lg:h-[800px] pt-16'>
          <Choose/>
          <FeatProd/>
        </div>
        <div className='h-[700px] lg:h-[600px]'>
          <div className='h-[350px] lg:[h-300px] pt-10 flex justify-center lg:justify-start'>
            <img className='h-[280px]' src={img} alt='img'/>
          </div>
          <div className='h-[350px] lg:[h-300px] pt-10 flex items-end justify-center lg:justify-end'>
            <img className="h-[280px]" src={image} alt='background-img'/>
          </div>
        </div>
      </section>
  )
}

export default Combined