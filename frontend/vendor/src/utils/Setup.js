import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Pages
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register'
import Dashboard from '../pages/home/Dashboard'

const Setup = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Dashboard/>}/>

        {/* Auth Routes */}
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* Auth Routes */}

      </Routes>
    </Router>
  )
}

export default Setup