import React from 'react';
import Join from '../components/home/Join'
import Partners from '../components/home/Partners'
import AllProd from '../components/product/AllProd';
import Header from '../components/product/Header';

const Products = () => {
  return (
    <main>
      <Header/>
      <AllProd/>
      <Join/>
      <Partners/>
    </main>
  )
}

export default Products