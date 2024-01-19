import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import Mains from './Components/Mains/Mains'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Mains/>
      <Footer/>
    </>
  )
}

export default App
