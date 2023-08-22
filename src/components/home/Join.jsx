import React from 'react';
import {FaLessThan, FaGreaterThan} from 'react-icons/fa'
import {FaArrowAltCircleRight, FaQuoteRight} from 'react-icons/fa';

const Join = () => {
  return (
    <section className='border-y-1 max-w-[1280px] lg:max-w-full bg-[#43a047]'>
      <div className='bg-white pt-2 rounded-bl-[180px] rounded-tr-[180px] hidden lg:block'>
        <div className='max-w-[700px] lg:max-w-[1000px] mx-auto h-[450px] grid grid-cols-2'>
          <div className='text-gray-800 my-auto'>
            <h2 className='text-3xl font-bold mb-8'>Thousands of people trust our agricultural products</h2>
            <p className='text-base mb-8'>
                Join Our Agricultural Family and Grow Together.
            </p>
            <button className='h-[40px] w-[150px] text-white border rounded-bl-[20px] rounded-tr-[20px] bg-[#43a047]'>
            <div className='flex justify-between w-[100px] mx-auto'>
              <span className='my-auto text-sm'>Join Now</span>
              <span className='my-auto'><FaArrowAltCircleRight size={25}/></span>
            </div>
            </button>
          </div>
          <div className="pt-6 px-6">
            <div className="h-[350px] py-8 px-8 bg-green-50 rounded-bl-[30px] rounded-tr-[30px]">
              <div className="w-full flex justify-end">
                <span className='text-green-600'><FaQuoteRight size={25}/></span>
              </div>
              <div className='w-[350px] mx-auto text-center mt-20'>
                <p className='text-sm'>Learn, Scale, Earn.</p>
              </div>
            </div>
            <div className='mt-6 w-[100px] mx-auto text-gray-50 flex justify-between'>
              <span className='bg-green-600 p-3 rounded-full'><FaLessThan/></span>
              <span className='bg-green-600 p-3 rounded-full'><FaGreaterThan/></span>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white pt-14 rounded-bl-[120px] rounded-tr-[120px] lg:hidden'>
        <div className='max-w-[400px] lg:max-w-[1000px] mx-auto grid'>
          <div className='text-gray-700 flex flex-col justify-center text-center'>
            <h2 className='text-2xl font-bold mb-8'>Thousands of people trust our agricultural products</h2>
            <p className='text-sm mb-8'>
              Join Our Agricultural Family and Grow Together.
            </p>
            <div className='mx-auto'>
            <button className='h-[40px] w-[150px] bg-[#43a047] border rounded-bl-[18px] rounded-tr-[18px] text-gray-50'>
            <div className='flex justify-between w-[100px] mx-auto text-sm'>
              <span className='my-auto'>Join Now</span>
              <span className='my-auto'><FaArrowAltCircleRight size={25}/></span>
            </div>
            </button>
            </div>
          </div>
          <div className="pt-14 pb-6 px-6">
            <div className="h-[300px] w-[300px] mx-auto py-4 px-4 bg-green-50 rounded-bl-[30px] rounded-tr-[30px]">
              <div className="w-full flex justify-end">
                <span className='text-green-600'><FaQuoteRight size={25}/></span>
              </div>
              <div className='w-[250px] mx-auto text-center mt-20'>
                <p className='text-sm'>Learn, Scale, Earn.</p>
              </div>
            </div>
            <div className='mt-6 w-[100px] mx-auto text-gray-50 flex justify-between'>
              <span className='bg-green-600 p-2 rounded-full'><FaLessThan size={15}/></span>
              <span className='bg-green-600 p-2 rounded-full'><FaGreaterThan size={15}/></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Join;