import React from 'react'

const AllProd = ({products}) => {
  return (
    <section className='max-w-[1100px] mx-auto'>
      {products && products.length > 0 ? (
        <div className='max-w-[500px] md:max-w-[750px] lg:max-w-[1080px] mx-auto mt-10 pb-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-8'>
          {products.map((item, index) =>{
            const {name, img} = item
            return (
              <div key={index} className="text-center mx-2 md:mx-0">
                <div id='feat' className="h-[140px] w-[150px] rounded-bl-[20px] rounded-tr-[20px] mx-auto">
                  <img className='rounded-bl-[20px] rounded-tr-[20px]' src={img} alt={name}/>
                </div>
                <h3 className='mt-4 text-xs font-semibold lg:text-sm'>
                  {name}
                </h3>
                <button className='mt-2 w-[100px] bg-green-600 text-white p-1 text-sm'>Order</button>
              </div>
            )
          })}
          </div>
      )
      :
      (
        <div className='w-[350px] bg-gray-100 mx-auto mt-10 text-center py-8 px-4 rounded-lg'>
          <h3 className='text-sm'>Sorry!! No available products to display.</h3>
        </div>
      )
    }
    </section>
  )
}

export default AllProd;