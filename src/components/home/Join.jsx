import React from 'react';
import {FaLessThan, FaGreaterThan} from 'react-icons/fa'
import {BsArrowRight} from 'react-icons/bs';

const Join = () => {
  return (
    <section className='md:h-screen border-y-2 bg-[#43a047] md:bg-white md:border-green-600'>
      <div className='bg-[#43a047] h-screen pt-20 rounded-bl-[300px] rounded-tr-[300px] hidden md:block'>
        <div className='max-w-[700px] lg:max-w-[1000px] mx-auto h-[500px] grid grid-cols-2'>
          <div className='text-gray-50 my-auto'>
            <h2 className='text-4xl font-bold mb-8'>Thousands of people trust our agricultural products</h2>
            <p className='text-lg mb-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc vulputate libero et velit interdum, ac aliquet odio
                mattis. 
            </p>
            <button className='h-[40px] w-[200px] bg-gray-50 border rounded-bl-[30px] rounded-tr-[30px] text-[#43a047]'>
            <div className='flex justify-between w-[150px] mx-auto'>
              <span className='my-auto'>Join Now</span>
              <span className='my-auto'><BsArrowRight size={30}/></span>
            </div>
            </button>
          </div>
          <div className="pt-14 px-6">
            <div className="h-[350px] px-8 flex items-center bg-gray-50 rounded-bl-[30px] rounded-tr-[30px]">
                <p className='text-base text-gray-800'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc vulputate libero et velit interdum, ac aliquet odio
                mattis.
                </p>
            </div>
            <div className='mt-6 w-[100px] mx-auto text-green-600 flex justify-between'>
              <span className='bg-gray-50 p-3 rounded-full'><FaLessThan/></span>
              <span className='bg-gray-50 p-3 rounded-full'><FaGreaterThan/></span>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-white pt-10 rounded-bl-[120px] rounded-tr-[120px] md:hidden'>
        <div className='max-w-[400px] lg:max-w-[1000px] mx-auto grid'>
          <div className='text-gray-700 flex flex-col justify-center text-center'>
            <h2 className='text-2xl font-bold mb-8'>Thousands of people trust our agricultural products</h2>
            <p className='text-sm mb-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc vulputate libero et velit interdum, ac aliquet odio
                mattis. 
            </p>
            <div className='mx-auto'>
            <button className='h-[40px] w-[150px] bg-[#43a047] border rounded-bl-[30px] rounded-tr-[30px] text-gray-50'>
            <div className='flex justify-between w-[100px] mx-auto text-sm'>
              <span className='my-auto'>Join Now</span>
              <span className='my-auto'><BsArrowRight size={25}/></span>
            </div>
            </button>
            </div>
          </div>
          <div className="pt-14 pb-6 px-6">
            <div className="h-[350px] px-8 flex items-center bg-green-200 rounded-bl-[30px] rounded-tr-[30px]">
                <p className='text-gray-800 text-sm'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc vulputate libero et velit interdum, ac aliquet odio
                mattis.
                </p>
            </div>
            <div className='mt-6 w-[100px] mx-auto text-gray-600 flex justify-between'>
              <span className='bg-gray-50 p-3 rounded-full'><FaLessThan/></span>
              <span className='bg-gray-50 p-3 rounded-full'><FaGreaterThan/></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Join;