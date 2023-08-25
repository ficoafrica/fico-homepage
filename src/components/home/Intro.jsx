import React from 'react'
import union from '../../img/home/Union.png';
import img1 from '../../img/home/img1.png';
import img2 from '../../img/home/img2.png';
import img3 from '../../img/home/img3.png';

const Intro = () => {
  return (
    <section className='lg:h-screen max-w-[1280px] lg:max-w-full border-b-2 bg-[#43a047]'>
      <div className='bg-white h-screen py-8 rounded-bl-[180px] rounded-tr-[180px] hidden lg:block'>
        <div className='mt-8 grid grid-cols-2 max-w-[1150px] h-[400px] mx-auto'>
          <div className='mt-8 w-[500px]'>
            <h2 className='text-3xl font-bold text-gray-800'>Fico Africa</h2>
            <p className='my-8 text-sm text-gray-800 pr-4'>A technology based supply chain company, that
                    focuses on giving smallholder farmers from underserved
                    communities access to a large network of global and
                    local vendors market.</p>
            <div className='flex justify-between w-[330px]'>
              <span>
              <button className='h-[40px] w-[150px] bg-[#43a047] border rounded-bl-[15px] rounded-tr-[15px] text-gray-100 text-sm'>Vendors</button>
              </span>
              <span>
                <button className='h-[40px] w-[150px] bg-white border border-[#43a047] rounded-bl-[15px] rounded-tr-[15px] text-[#43a047] text-sm'>Farmers</button>
              </span>
            </div>
          </div>
          <div className='py-4'>
            <div id='image' className='w-[480px] mx-auto'>
              <img src={union} alt='union'/>
            </div>
          </div>
        </div>

        <div id='round-image' className='w-[400px] mt-4 mx-auto flex justify-between'>
          <span>
            <img className='h-[80px]' src={img1} alt='image1'/>
          </span>
          <span>
            <img className='h-[80px]' src={img2} alt='image2'/>
          </span>
          <span>
            <img className='h-[80px]' src={img3} alt='image3'/>
          </span>
        </div>
      </div>

      <div className='bg-white py-6 rounded-bl-[120px] rounded-tr-[120px] lg:hidden'>
        <div className='text-center w-[350px] mx-auto'>
        <h2 className='text-2xl font-bold text-gray-800'>Fico Africa</h2>
            <p className='mt-8 mb-10 text-sm text-gray-800 pr-4'>A technology based supply chain company, that
                    focuses on giving smallholder farmers from underserved
                    communities access to a large network of global and
                    local vendors market</p>
                
        </div>
        <div id='image' className='my-6 w-[300px] mx-auto'>
          <img src={union} alt='union'/>
        </div>
          <div id='round-image' className='mt-6 w-[200px] mx-auto flex justify-between'>
          <span>
            <img className='h-[40px]' src={img1} alt='image1'/>
          </span>
          <span>
            <img className='h-[40px]' src={img2} alt='image2'/>
          </span>
          <span>
            <img className='h-[40px]' src={img3} alt='image3'/>
          </span>
        </div>
        <div className='mt-8 mb-6 flex justify-between w-[300px] mx-auto'>
            <span>
            <button className='h-[40px] w-[135px] bg-[#43a047] border rounded-bl-[18px] rounded-tr-[18px] text-gray-100 text-sm'>Vendors</button>
            </span>
            <span>
              <button className='h-[40px] w-[135px] bg-white border border-[#43a047] rounded-bl-[18px] rounded-tr-[18px] text-[#43a047] text-sm'>Farmers</button>
            </span>
        </div>
      </div>
    </section>
  )
}

export default Intro