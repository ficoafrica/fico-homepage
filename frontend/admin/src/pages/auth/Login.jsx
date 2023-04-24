import React from 'react';
import Logo from '../../img/global/fico_logo.jpeg';
import Admin from '../../img/auth/admin.jpg';
import { Link } from 'react-router-dom';
import {BsFillLockFill} from 'react-icons/bs';
import Typed from 'react-typed';

const Login = () => {
  return (
    <section id='login' className='bg-gray-100 h-screen'>
      <div id='login-body' className='py-10 max-w-[1240px] mx-auto grid lg:grid-cols-[60%_40%]'>
        <div id='img-typed' className='hidden lg:block'>
          <img className='rounded-lg' src={Admin} alt="admin" />
          <div id="img-text" className='flex flex-col items-center justify-center text-gray-100 rounded-lg'>
            <h3 className='text-3xl font-bold'>Sign in as Admin</h3>
            <Typed
            className='mt-4 text-2xl font-medium'
            strings={['Become our representative in your area.', 'Supervise our suppliers close to you.']}
            typeSpeed={120}
            backSpeed={140}
            loop
            />
          </div>
        </div>
        <div id='login-container' className='flex items-center flex-col'>
          <div id='logo'>
            <img className='w-24' src={Logo} alt="logo" />
          </div>
          <div id='container' className='bg-white w-11/12 md:w-5/12 lg:w-10/12 mt-4 rounded-md shadow'>            
          <form>
            <div id='form-content' className='px-8 pt-8 text-gray-700'>
              <div className='flex flex-col'>
                <label className='text-sm mb-2' htmlFor="username">Username</label>
                <input className='border border-gray-300 h-10 rounded-md py-4 px-2 text-sm focus:outline-green-400' type="text" placeholder='Enter Username'/>
              </div>
              <div className='flex flex-col mt-2'>
                <label className='text-sm mb-2' htmlFor="password">Password</label>
                <input className='border border-gray-300 h-10 rounded-md py-4 px-2 text-sm focus:outline-green-400' type="password" placeholder='Enter Password'/>
              </div>
              <div className='mt-4'>
                <input className='h-10 w-[100%] rounded-md text-sm text-center tracking-wide bg-green-400 text-white py-2 hover:bg-green-700 hover:tracking-wider' type="submit" value="Login" />
              </div>
            </div>
          </form>
          <div className='my-4 mx-auto text-sm flex justify-center text-gray-700'>
          <span><BsFillLockFill/></span>      
          <p>Forgot Password?</p>
          </div>
          </div>
          <div className='mt-6 mx-auto text-sm text-gray-700'>
          <p>Don't have an account? <Link to="/register" className='text-green-600
              hover:text-green-400 hover:underline'>
              Register</Link></p>
          <p className='py-4 text-center'>&copy; 2023 – Fico Africa, Inc.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login