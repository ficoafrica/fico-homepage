import React from 'react';
import Vendor from '../img/vendor2.jpg'

const Slider = () => {
  return (
      <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Vendor} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>BECOME A VENDOR</p>
          <p className='py-2 text-gray-600 tracking-wide'>Purchase as a vendor to gain exclusive offers and delivery options.</p>
          <button className='bg-gray-700 text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Slider