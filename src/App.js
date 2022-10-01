import React from 'react'
import './App.css'
import Singin from './Pages/Sing/Signin'
import Singup from './Pages/Sign.up/Singup'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <div>
      

       <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/signin' element={<Singin/>}/>
        <Route path='/signup' element={<Singup/>}/>

       </Routes>
     
      
      
    </div>
  )
}

export default App