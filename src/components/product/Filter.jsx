import React, {useState} from 'react';
import {RiArrowDropDownLine} from 'react-icons/ri'
import './product.css'

const Filter = ({categories, filterItems, searchItems, name}) => {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState('All Categories');
  const [drop, setDrop] = useState(false);
  // const accMenuRef = useRef()

  const handleClick = (index) =>{
    setActive(index)
  }

  // useEffect(() => {
  //   let handler = (e)=>{
  //     if(!accMenuRef?.current?.contains(e.target)){
  //       setDrop(false);
  //     }      
  //   };
  //   document.addEventListener("mousedown", handler);
    
  //   return() =>{
  //     document.removeEventListener("mousedown", handler);
  //   }
  // });


  return (
    <section className="max-w-[1280px] mx-auto pt-14 pb-8">
      <div className="max-w-[500px] mx-auto flex flex-col text-center pb-4">
        <span className='mb-8'>
          <h3 className='text-2xl font-semibold'>Our Featured Products</h3>
        </span>
        <span className='pb-2'>
          <input type='text' className="h-[35px] w-[300px] border border-green-600 p-2 text-gray-700 text-xs md:text-sm focus:outline-green-600" placeholder='Search for Products'
            value={name}
            onChange={searchItems}
          />
        </span>
      </div>
      <div className='max-w-[750px] mx-auto mt-10 hidden md:flex md:justify-between'>
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
      <div className="max-w-[450px] mx-auto mt-10 md:hidden">
        <div className='flex justify-between w-[180px] mx-auto border-2 border-green-600 text-black text-center text-xs cursor-pointer'
        onClick={()=> setDrop(!drop)}
        >
            <span className='py-1 pl-4'>{selected}</span>
          <span className='border-l-2 border-green-600 p-1'><RiArrowDropDownLine size={20}/></span>        
        </div>
        <div className={drop? 'w-[180px] mx-auto border-2 border-t-0 border-green-600 text-xs flex flex-col text-center': 'hidden'}>
        {categories.map((category, index)=> {
            return(
              <span
              key={index}
              onClick={()=> {filterItems(category); setSelected(category); handleClick(index); setDrop(false)}}
              className={active === index ? 'p-1 cursor-pointer bg-green-600 text-white' : 'p-1 cursor-pointer'}
              >
              {category}
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Filter;