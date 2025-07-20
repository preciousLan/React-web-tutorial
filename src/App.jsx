import React from 'react'
import Navbar  from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/Title/Title'



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Title/>
      <Programs />
    </div>
  )
}

export default App

