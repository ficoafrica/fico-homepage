import React from 'react';
import Farm from '../img/farm1.jpg';


const Farmer = () => {
  return (
      <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Farm} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold '>WELCOME TO THE FAMILY!</p>
          <p className='py-2 text-gray-600 tracking-wide'>We are open to working with you, either as a farmer or as an investor.</p>
          <button className='bg-gray-700 text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Join Us</button>
        </div>
      </div>
    </div>
  )
}

export default Farmer