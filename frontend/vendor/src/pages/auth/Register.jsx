import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../img/global/fico_logo.jpeg'

const Register = () => {
	return (
		<section id='Register' className='bg-gray-100 h-full flex items-center flex-col py-4 md:py-10'>
    <div id='logo'>
      <img className='w-24' src={Logo} alt="logo" />
    </div>
    <div id='container' className='bg-white w-11/12 md:w-6/12 lg:w-4/12 mt-4 rounded-md shadow'>
      <div id='conatiner-header' className='bg-gray-700 text-green-300 p-4 rounded-t-md'>
        <h3 className='font-medium'>Join Us</h3>
        <p className='text-sm'>Register as a Vendor</p>
      </div>
    <form>
      <div id='form-content' className='p-8 text-gray-700'>
        <div className='flex flex-col'>
          <label className='text-sm mb-2' htmlFor="username">Username</label>
          <input className='border border-gray-300 h-10 rounded-md py-4 px-2 text-sm focus:outline-green-400' type="text" placeholder='Enter Username'/>
        </div>
        <div className='flex flex-col mt-2'>
          <label className='text-sm mb-2' htmlFor="email">Email Address</label>
          <input className='border border-gray-300 h-10 rounded-md py-4 px-2 text-sm focus:outline-green-400' type="email" placeholder='Enter Email'/>
        </div>
        <div className='flex flex-col mt-2'>
          <label className='text-sm mb-2' htmlFor="password">Password</label>
          <input className='border border-gray-300 h-10 rounded-md py-4 px-2 text-sm focus:outline-green-400' type="password" placeholder='Enter Password'/>
        </div>
        <div className='flex flex-col mt-2'>
          <label className='text-sm mb-2' htmlFor="password">Confirm Password</label>
          <input className='border border-gray-300 h-10 rounded-md py-4 px-2 text-sm focus:outline-green-400' type="password" placeholder='Confirm Password'/>
        <div className='mt-4'>
          <input className='h-10 w-[100%] rounded-md text-sm text-center tracking-wide bg-green-400 text-white py-2 hover:bg-green-700 hover:tracking-wider' type="submit" value="Register" />
        </div>
        </div>
      </div>
    </form>
    </div>
    <div className='mt-6 mx-auto text-sm text-gray-700'>
    <p>Already have an account? <Link to="/login" className='text-green-600
        hover:text-green-400 hover:underline'>
        Login</Link></p>
    <p className='py-4 text-center'>&copy; 2023 – Fico Africa, Inc.</p>
    </div>
    </section>
	)
}

export default Register