import React from 'react';
import { Link } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs'

const Sidebar = ({nav, toggle, menuRef}) => {
  return (
    <div ref={menuRef} className={nav? 'bg-white fixed right-0 top-0 w-[45%] h-[30%] border-l shadow-md ease-in-out duration-500 md:hidden py-2 px-2' : 'ease-in-out duration-500 fixed left-[-100%] md:hidden'}>
      <span className='text-green-600 cursor-pointer' onClick={()=> toggle(false)}>
        <BsArrowLeft size={20}/>
      </span>
      <div className='mt-4 flex flex-col py-2' onClick={()=> toggle(false)}>
        <span className='p-2 hover:text-[#43a047] text-sm mx-auto'><Link to='/'>Home</Link></span>
        <span className='p-2 hover:text-[#43a047] text-sm mx-auto'><Link to='/products'>Products</Link></span>
        <span className='p-2 hover:text-[#43a047] text-sm mx-auto'><Link to='/about'>About Us</Link></span>
        <Link to='/' className='mx-auto'>
          <button className='h-[30px] w-[80px] bg-[#43a047] border rounded-bl-[10px] rounded-tr-[10px] text-gray-100 text-xs'>
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar