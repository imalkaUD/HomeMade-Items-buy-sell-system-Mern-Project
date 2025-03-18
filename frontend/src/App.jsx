import { useState } from 'react'
import './App.css'
import  Home  from './pages/Home.jsx'

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
   
    <Routes>
      <Route index path='/' element={   <Home />}></Route>
    
   </Routes>
   
    
  
  );
}

export default App
