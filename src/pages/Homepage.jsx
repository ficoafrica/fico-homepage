import React from 'react';
import Intro from '../components/home/Intro'; 
import Combined from '../components/home/Combined';
import Join from '../components/home/Join';
import Partners from '../components/home/Partners'

const Homepage = () => {
  return (
    <main>
      <Intro/>
      <Combined/>
      <Join/>
      <Partners/>
    </main>
  )
}

export default Homepage