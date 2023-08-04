import React from 'react'
import union from '../../img/home/Union.png';
import img1 from '../../img/home/img1.png';
import img2 from '../../img/home/img2.png';
import img3 from '../../img/home/img3.png';

const Intro = () => {
  return (
    <section className='lg:h-screen border-b-2 bg-[#43a047]'>
      <div className='bg-white h-screen py-8 rounded-bl-[300px] rounded-tr-[300px] hidden lg:block'>
        <div className='grid grid-cols-2 max-w-[1020px] h-[400px] mx-auto'>
          <div className='mt-8'>
            <h2 className='text-3xl font-bold text-gray-800'>Fico Africa</h2>
            <p className='my-8 text-sm text-gray-800 pr-4'>Fico Africa is a technology based supply chain startup
                located in Port Harcourt, Nigeria, that focuses on giving
                smallholder farmers from underserved communities
                access to a large network of global and local vendors
                market. We aim to solve the problem of inflation on rare
                commodities and help provide availability for those
                commodities. We also provide secure logistics for vendors
                through our logistics solution built for the African market.</p>
            <div className='flex justify-between w-[330px]'>
              <span>
              <button className='h-[40px] w-[150px] bg-[#43a047] border rounded-bl-[30px] rounded-tr-[30px] text-gray-100'>Vendors</button>
              </span>
              <span>
                <button className='h-[40px] w-[150px] bg-white border border-[#43a047] rounded-bl-[30px] rounded-tr-[30px] text-[#43a047]'>Farmers</button>
              </span>
            </div>
          </div>
          <div>
            <div id='image'>
              <img src={union} alt='union'/>
            </div>
          </div>
        </div>

        <div id='round-image' className='w-[400px] mx-auto flex justify-between'>
          <span>
            <img src={img1} alt='image1'/>
          </span>
          <span>
            <img src={img2} alt='image2'/>
          </span>
          <span>
            <img src={img3} alt='image3'/>
          </span>
        </div>
      </div>

      <div className='bg-white py-6 rounded-bl-[120px] rounded-tr-[120px] lg:hidden'>
        <div className='text-center w-[350px] mx-auto'>
        <h2 className='text-2xl font-bold text-gray-800'>Fico Africa</h2>
            <p className='my-8 text-sm text-gray-800 pr-4'>Fico Africa is a technology based supply chain startup
                located in Port Harcourt, Nigeria, that focuses on giving
                smallholder farmers from underserved communities
                access to a large network of global and local vendors
                market. We aim to solve the problem of inflation on rare
                commodities and help provide availability for those
                commodities. We also provide secure logistics for vendors
                through our logistics solution built for the African market.</p>
        </div>
        <div id='image' className='flex justify-center'>
          <img className='h-[180px]' src={union} alt='union'/>
        </div>
          <div id='round-image' className='mt-4 w-[200px] mx-auto flex justify-between'>
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
        <div className='mt-6 flex justify-between w-[330px] mx-auto'>
            <span>
            <button className='h-[40px] w-[150px] bg-[#43a047] border rounded-bl-[30px] rounded-tr-[30px] text-gray-100'>Vendors</button>
            </span>
            <span>
              <button className='h-[40px] w-[150px] bg-white border border-[#43a047] rounded-bl-[30px] rounded-tr-[30px] text-[#43a047]'>Farmers</button>
            </span>
        </div>
      </div>
    </section>
  )
}

export default Intro