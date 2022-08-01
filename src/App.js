import React from 'react'
import './App.css'
import Banner from './Commponent/Banner/Banner'
import NavBar from './Commponent/NavBar/NavBar'
import Rowpost from './Commponent/Rowpost/Rowpost'
import{HorrorMovies,ComedyMovies, originals, action ,RomanceMovies}from './url'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rowpost url={originals} title='NetFlix Originals'/>
      <Rowpost url={action} title='Action Movies'isSmall/>
      <Rowpost url={HorrorMovies} title='Horror Movies 'isSmall/>
      <Rowpost url={ComedyMovies} title='Comedy Movies 'isSmall/>
      <Rowpost url={RomanceMovies} title='Romance Movies 'isSmall/>
      
     
      
      
    </div>
  )
}

export default App