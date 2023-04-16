import React from 'react';
import Track1 from '../img/track1.jpg';

const Track = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Track1} alt='/' />
        <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold '>FAST AND SECURE DELIVERY</p>
          <p className='py-2 text-gray-600 tracking-wide'>Track your products with our new and improved product-tracking technology.</p>
          <button className='bg-gray-700 text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Track Now</button>
        </div>
      </div>
    </div>
  )
}

export default Track