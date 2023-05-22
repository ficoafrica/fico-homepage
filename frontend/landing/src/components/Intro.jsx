import React from 'react';
import Delivery from '../img/delivery_truck.jpg';

const Intro = () => {
  return (
    <section className='bg-gray-100 h-screen w-full py-32 px-6'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <h1 className='md:text-5xl sm:text-4xl text-3xl font-bold py-2 tracking-wide'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-green-600'>Get fresh, quality farm products</span>          
          </h1>
          <p className='text-gray-700 tracking-wide my-2 leading-loose'>We help vendors get rare fresh 
          farm products directly from the farms, giving local farmers access to a large international vendor market. </p>
          <button className='bg-[#00df9a] text-white w-[200px] rounded-md font-medium my-10 mx-0 py-3
          hover:tracking-wide hover:bg-green-600'>Get Started</button>
        </div>
        <img className='w-[500px] mx-auto my-4 rounded-lg transition-shadow hidden md:block' src={Delivery} alt="Delivery truck" />
      </div>
    </section>
  )
}

export default Intro;