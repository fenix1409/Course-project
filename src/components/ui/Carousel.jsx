import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Advantage from './sections/Advantage'
import Directions from './sections/Directions'

const Carousel = () => {
  return (
    <>
      <Header />
      <main className="">
        <Hero />
        <Advantage />
        <Directions/>
      </main>
    </>
  )
}

export default Carousel