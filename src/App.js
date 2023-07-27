import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Farmer from './components/Farmer';
import Track from './components/Track';
import Slider from './components/Slider';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Slider/>
      <Farmer/>
      <Track/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App;
