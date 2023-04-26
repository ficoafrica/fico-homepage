import React from 'react'
import {FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithubSquare} from 'react-icons/fa'
import Logo from '../img/fico_logo.jpeg';

const Footer = () => {
  return (
    <section id='footer' className='bg-gray-100'>
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-700'>
        <div>
          <img className='w-24' src={Logo} alt="logo" />
          <p className='py-4'>&copy; 2023 – Fico Africa, Inc.</p>
          <div className='flex justify-between md:w-[75%] my-6 text-green-700'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-700'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Food Supply</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Logistics</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-700'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Dispute</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API Status</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-700'>Company</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Partners</li>
                <li className='py-2 text-sm'>Farmers</li>
                <li className='py-2 text-sm'>Careers</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-700'>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
            </ul>
        </div>
          </div>
      </div>
    </section>
  )
}

export default Footer;