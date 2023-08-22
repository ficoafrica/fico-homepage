import React from 'react'
import './home.css';
import image from '../../img/home/bg-img.jpg'
import access from '../../img/home/access.png'
import climate from '../../img/home/climate.png'
import secure from '../../img/home/secure.png'

const Choose = () => {
  return (
    <section className='max-w-[350px] md:max-w-[1180px] h-[620px] md:h-[450px] mx-auto pt-16'>
      <div className='h-[200px] md:h-[320px] grid md:grid-cols-[40%_60%]'>
        <div id='feat' className='h-[200px] md:h-[320px]'>
          <img src={image} alt='img'/>
        </div>
        <div className='bg-green-600 text-gray-100 py-6'>
          <div className='max-w-[250px] md:max-w-[500px] mx-auto text-center'>
            <h1 className='text-2xl md:text-3xl font-bold mb-4'>Why Choose Us</h1>
            <p className='text-xs md:text-sm'>Fico Africa is committed to delivering the best services for our
                customers and also help farmers scale their production using
                our cutting-edge technologies.</p>
          </div>
          <div className='max-w-[250px] md:max-w-[450px] mx-auto grid mt-4'>
            <div className='flex flex-row mb-2'>
              <img className='h-[40px]' src={access} alt='access'/>
              <span className='ml-4 my-auto'>
                <p className="text-xs md:text-sm">Access to a Large international Vendor market.</p>
              </span>
            </div>
            <div className='flex flex-row mb-2'>
              <img className='h-[40px]' src={climate} alt='climate'/>
              <span className='ml-4 my-auto'>
                <p className="text-xs md:text-sm">Climate Smart Agricultural Solution for farmers.</p>
              </span>
            </div>
            <div className='flex flex-row mb-2'>
              <img className='h-[40px]' src={secure} alt='secure'/>
              <span className='ml-4 my-auto'>
                <p className="text-xs md:text-sm">Secure & safe farm logistics system</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose