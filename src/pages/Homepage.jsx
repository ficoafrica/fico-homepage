import React from 'react';
import Intro from '../components/home/Intro'; 
import Choose from '../components/home/Choose';
import FeatProd from '../components/home/FeatProd';
import Join from '../components/home/Join';

const Homepage = () => {
  return (
    <main>
      <Intro/>
      <Choose/>
      <FeatProd/>
      <Join/>
    </main>
  )
}

export default Homepage