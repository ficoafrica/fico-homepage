import React from 'react'
import logo from '../../img/global/logo.png'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'

const Navbar = () => {

  return (
    <section className="flex justify-between items-center h-20 max-w-[1280px] mx-auto px-4 text-gray-800">
      <div>
        <img className='h-[35px]' src={logo} alt='logo'/>
      </div>
      <div>
        <ul className='hidden md:flex'>
          <li className='p-4 hover:text-[#43a047] text-sm'><Link to='/'>Home</Link></li>
          <li className='p-4 hover:text-[#43a047] text-sm'><Link to='/products'>Products</Link></li>
          <li className='p-4 hover:text-[#43a047] text-sm'><Link to='/about'>About Us</Link></li>
        </ul>
      </div>
      <div>
        <ul className='hidden md:flex'>
          <li className='p-4'>
            <Link to='/'>
              <button className='h-[40px] w-[150px] bg-[#43a047] border rounded-bl-[15px] rounded-tr-[15px] text-gray-100'>
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className='text-green-600 md:hidden'>
        <FaBars/>
      </div>
    </section>
  )
}

export default Navbar;