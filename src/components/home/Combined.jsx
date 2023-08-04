import React from 'react'
import Choose from './Choose'
import FeatProd from './FeatProd';
import img from '../../img/home/bg-img.jpg'
import image from '../../img/home/bg-image.png'
import './home.css'

const Combined = () => {
  return (
    <section className='h-[800px] max-w-[1200px] mx-auto'>
      <div className='home-overlay'>
          <Choose/>
          <FeatProd/>
        </div>
        <div className='h-[600px]'>
          <div className='[h-300px] pt-10 flex items-start '>
            <img className='h-[200px]' src={img} alt='img'/>
          </div>
          <div className='h-[300px] pt-10 flex items-end justify-end'>
            <img className="h-[200px]" src={image} alt='background-img'/>
          </div>
        </div>
      </section>
  )
}

export default Combined