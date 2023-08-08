import React from 'react';
import img from '../../img/home/bg-image.png'
import './product.css'

const Header = () => {
  return (
    <section className='h-[200px] border-b-2 bg-[#43a047]'>
      <div className='bg-white h-[200px] lg:py-4 rounded-bl-[80px] rounded-tr-[80px]'>
        <div className='lg:grid grid-cols-[65%_35%] max-w-[1280px] h-[150px] mx-auto hidden'>
          <div className='px-2'>
            <div className='my-auto px-2'>
              <h3 className='text-2xl font-bold mb-4'>Our Featured Products</h3>
              <p className='text-sm'>
                We offer the best of fresh farm products sourced from across the country to our customers.
                Check out the best selling products available for order.
              </p>
            </div>
          </div>
          <div id="image" className='h-[150px] w-[448px]'>
            <img src={img} alt='bg-img'/>
          </div>
        </div>

        <div className="lg:hidden max-w-[1280px] px-4">
          <div className='header-overlay h-[200px] text-center pt-6'>
            <div className='w-[400px] mx-auto'>
              <h3 className='text-xl font-bold mb-4'>Our Featured Products</h3>
              <p className='text-xs'>
                We offer the best of fresh farm products sourced from across the country to our customers.
                Check out the best selling products available for order.
              </p>
            </div>
          </div>
          <div className='h-[200px] pt-5 flex justify-end'>
            <img className="h-[150px]" src={img} alt='background-img'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header;