import React, {useState} from 'react';
import './product.css'

const Filter = ({categories, filterItems}) => {
  const [active, setActive] = useState(0);

  const handleClick = (index) =>{
    setActive(index)
  }
  return (
    <section className="max-w-[1280px] mx-auto pt-14 pb-8">
      <div className="max-w-[500px] mx-auto flex flex-col text-center pb-4">
        <span className='mb-8'>
          <h3 className='text-2xl font-semibold'>Our Featured Products</h3>
        </span>
        <span className='pb-2'>
          <input type='text' className="h-[35px] w-[300px] border border-green-600 p-2 text-gray-700 text-sm focus:outline-green-600"/>
          <button type='submit' className="bg-green-600 text-white h-[35px] w-[75px]">Search</button>
        </span>
      </div>
      <div className='max-w-[750px] mx-auto mt-10 flex justify-between'>
        {categories.map((category, index) => {
          return(
            <button
            type='button'
            key={index}
            className={active === index ? 'bg-green-600 text-white w-[160px] p-2 text-sm': 'w-[160px] border-2 border-green-600 text-black p-1 text-sm'}
            onClick={()=> {handleClick(index); filterItems(category)}}
            >
              {category}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default Filter;