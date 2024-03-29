import React from 'react'
import {Link} from 'react-router-dom'
import './home.css';
import carrot from '../../img/home/carrots.jpg';
import corn from '../../img/home/corn.jpg';
import melon from '../../img/home/melon.jpg';
import plantain from '../../img/home/plantain.jpg';
import tomato from '../../img/home/tomato.jpg';

const data = [
  {
    name: 'Carrots',
    img: carrot
  },
  {
    name: 'Fresh corns',
    img: corn
  },
  {
    name: 'Melon seeds',
    img: melon
  },
  {
    name: 'Plantain',
    img: plantain
  },
  {
    name: 'Fresh tomatoes',
    img: tomato
  },
]

const FeatProd = () => {
  return (
    <div className='max-w-[1280px] mx-auto my-6 lg:my-14'>
      <div className='text-center w-[300px] md:w-[450px] mx-auto'>
        <h3 className='text-2xl font-bold mb-4'>Our Featured Product</h3>
        <p className='text-sm'>
          We offer the best of fresh farm products sourced from across the country to our customers.
          Check out the best selling products available for order.
        </p>
      </div>

      <div className='max-w-[1080px] mx-auto mt-10 pb-6 flex justify-between overflow-x-auto'>
        {data.map((item, index) =>{
          const {name, img} = item
          return (
            <div key={index} className="text-center mx-2 md:mx-0">
              <div id='feat' className="h-[140px] w-[150px] rounded-bl-[20px] rounded-tr-[20px]">
                <img className='rounded-bl-[20px] rounded-tr-[20px]' src={img} alt={name}/>
              </div>
              <h3 className='mt-4 text-xs font-semibold lg:text-sm'>
                {name}
              </h3>
            </div>
          )
        })}
      </div>

      <div className='mt-8 mb-6 flex justify-center'>
      <Link to='/products'>
        <button className='px-6 py-2 text-sm border-2 border-green-600 rounded-bl-[15px] rounded-tr-[15px]'>View Products</button>
      </Link>
      </div>
    </div>
  )
}

export default FeatProd