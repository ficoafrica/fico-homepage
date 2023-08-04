import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Pages
import Homepage from '../pages/Homepage';
import Products from '../pages/Products';
import About from '../pages/About';

// Components
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';

const Setup = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default Setup