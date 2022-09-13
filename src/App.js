import React from 'react'
import './App.css'
import Banner from './Commponent/Banner/Banner'
import NavBar from './Commponent/NavBar/NavBar'
import Rowpost from './Commponent/Rowpost/Rowpost'
import{HorrorMovies,ComedyMovies, originals, action ,RomanceMovies,trending,Documentaries}from './url'

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rowpost url={originals} title='NetFlix Originals'/>
      <Rowpost url={trending} title='Trending'isSmall/>
      <Rowpost url={action} title='Action Movies'isSmall/>
      <Rowpost url={HorrorMovies} title='Horror Movies 'isSmall/>
      <Rowpost url={ComedyMovies} title='Comedy Movies 'isSmall/>
      <Rowpost url={RomanceMovies} title='Romance Movies 'isSmall/>
      <Rowpost url={Documentaries} title='Documentaries'isSmall/>
      
     
      
      
    </div>
  )
}

export default App