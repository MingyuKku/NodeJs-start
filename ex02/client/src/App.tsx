import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/login' element={ <LoginPage /> } />
        <Route path='/dashboard' element={ <RegisterPage /> } />
      </Routes>
    </div>
  )
}

export default App