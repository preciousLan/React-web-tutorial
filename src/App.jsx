import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/Title/Title'
import Gallery from './components/Gallery/Gallery'



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">

        <Title heading="OUR PROGRAMS" subheading="What WE Offer" />
        <Programs />
        <Title heading="GALLERY" subheading="Campus Photos" />
        <Gallery />
        <Title heading="TESTIMONIALS" subheading="What Student Says" />
      </div>

    </div>
  )
}

export default App

