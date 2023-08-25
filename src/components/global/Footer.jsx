import React from 'react'
import logo from '../../img/global/logo.png'
import {FaWhatsapp, FaFacebook, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='max-w-[1280px] mx-auto pt-16 lg:pt-28 pb-10'>
      <div id='logo' className='p-4'>
        <img className='h-[35px] mx-auto lg:mx-0' src={logo} alt='logo'/>
      </div>
      <div className='grid lg:grid-cols-3'>
        <div className='w-[350px] mx-auto py-4 text-center lg:text-start'>
          <p className='text-xs md:text-sm'>
          Cultivating Prosperity by giving Farmers Access to Thriving Vendor Markets 
          for Sustainable Agricultural Success.
          </p>
        </div>
        <div className='w-[360px] md:w-[430px] mx-auto p-4 flex justify-between'>
          <div className='text-xs md:text-sm'>
            <h1 className='font-medium text-gray-500'>ABOUT US</h1>
            <p>Sustainability</p>
            <p>Manifesto</p>
            <p>Team</p>
            <p>Contact</p>
          </div>
          <div className='text-xs md:text-sm'>
            <h1 className='font-medium text-gray-500'>SOLUTIONS</h1>
            <p>Fico Logistics</p>
            <p>Fico CSA</p>
            <p>FicoMarket Nexus</p>
          </div>
          <div className='text-xs md:text-sm'>
            <h1 className='font-medium text-gray-500'>RESOURCES</h1>
            <p>FAQ</p>
            <p>Blogs</p>
            <p>Press and Media Kit</p>
          </div>
        </div>
        <div className='p-4'>
          <div className='mx-auto w-[250px] px-2'>
            <h3 className='font-bold mb-8'>Subscribe to our Newsletter</h3>
            <input className='p-2 text-sm text-gray-600 w-[200px] border border-green-600 rounded-lg border-r-0 focus:outline-green-600' type='email' placeholder='Email'/>
            <button className='p-2 border bg-green-600 text-gray-50 rounded-lg ml-[-25px]' type='submit'>Send</button>
          </div>
        </div>
      </div>
      <div id='socials' className='p-4 w-[160px] mx-auto flex justify-between mt-6 lg:mt-0 lg:mx-0'>
        <span className='bg-gray-300 p-2 rounded-full'>
          <FaWhatsapp/>
        </span>
        <span className='bg-gray-300 p-2 rounded-full'>
          <FaFacebook/>
        </span>
        <span className='bg-gray-300 p-2 rounded-full'>
          <FaLinkedin/>
        </span>
      </div>
      <hr className='h-[10px]'/>
      <div className='my-4 text-center'>
        <p className='text-gray-500 text-xs'>Copyright 2023 FicoAfrica. All Rights Reserved</p>
      </div>
    </section>
  )
}

export default Footer