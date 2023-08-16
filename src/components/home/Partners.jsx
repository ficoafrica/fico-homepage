import React from 'react'
import {FaGoogle} from 'react-icons/fa';

const Partners = () => {
  return (
    <section className='pt-24'>
      <div className='text-center mb-6'>
        <h2 className='font-bold mb-4 text-2xl'>Trusted by Partners</h2>
        <p className='text-sm'>Partner with us and be part of this amazing journey.</p>
      </div>
      <div className='bg-gray-200 pb-12'>
        <div className='max-w-[1200px] py-8 mx-auto flex justify-between text-gray-500'>
          <span><FaGoogle size={65}/></span>
          <span><FaGoogle size={65}/></span>
          <span><FaGoogle size={65}/></span>
          <span><FaGoogle size={65}/></span>
          <span><FaGoogle size={65}/></span>
          <span><FaGoogle size={65}/></span>
          <span><FaGoogle size={65}/></span>
        </div>
        <div className='my-8 flex justify-center'>
          <button className='h-[40px] w-[170px] bg-[#43a047] border rounded-bl-[30px] rounded-tr-[30px] text-gray-100'> 
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  )
}

export default Partners;