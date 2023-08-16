import React from 'react'
import './home.css';
import { ReactComponent as Gift} from '../../svg/gift-open.svg'

const Choose = () => {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <div className='text-center w-[450px] mx-auto'>
        <h3 className='text-2xl font-bold mb-4'>Why Choose Us</h3>
        <p className='text-sm'>Fico Africa is committed to delivering the best services for our customers and also help farmers scale
        their production using our cutting-edge technologies. 
        </p>
      </div>

      <div className='w-[250px] lg:w-[1050px] mx-auto mt-6 grid lg:grid-cols-3 gap-y-3'>
        <div id='container' className='h-[75px] w-[250px] lg:h-[100px] lg:w-[300px]  p-4 rounded-bl-[35px] rounded-tr-[35px] flex justify-between'>
          <span><Gift className="h-[40px] lg:h-[60px]"/></span>
          <span className='lg:px-2 lg:my-auto'>
            <p className='text-xs'>Access to a large lucrative vendor market.</p>
          </span>
        </div>
        <div id='container' className='h-[75px] w-[250px] lg:h-[100px] lg:w-[300px]  p-4 rounded-bl-[35px] rounded-tr-[35px] flex justify-between'>
        <span><Gift className="h-[40px] lg:h-[60px]"/></span>
          <span className='lg:px-2 lg:my-auto'>
            <p className='text-xs'>Climate Smart Agricultural solution for farmers.</p>
          </span>
        </div>
        <div id='container' className='h-[75px] w-[250px] lg:h-[100px] lg:w-[300px]  p-4 rounded-bl-[35px] rounded-tr-[35px] flex justify-between'>
        <span><Gift className="h-[40px] lg:h-[60px]"/></span>
          <span className='lg:px-2 lg:my-auto'>
            <p className='text-xs'>Secure and safe farm logistics system.</p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Choose