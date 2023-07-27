import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Logo from '../img/fico_logo.jpeg';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <section id='navbar' className='bg-gray-100'>
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-gray-700'>
    <img className='w-24' src={Logo} alt="logo" />
    <ul className='hidden md:flex font-medium'>
      <li className='p-4'>Home</li>
      <li className='p-4'>Features</li>
      <li className='p-4'>Pricing</li>
      <li className='p-4'>FAQS</li>
      <li className='p-4'>About</li>
    </ul>
    <div onClick={handleNav} className='block md:hidden'>
      {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
    </div>
    <ul className={nav ? 'bg-gray-100 font-medium fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-100 ease-in-out duration-500 md:hidden': 'ease-in-out duration-500 fixed left-[-100%] md:hidden'}>
    <img className='w-24' src={Logo} alt="logo" />
      <li className='p-4 border-b border-gray-300'>Home</li>
      <li className='p-4 border-b border-gray-300'>Features</li>
      <li className='p-4 border-b border-gray-300'>Pricing</li>
      <li className='p-4 border-b border-gray-300'>FAQS</li>
      <li className='p-4'>About</li>
    </ul>
    </div>
    </section>
  )
}

export default Navbar;