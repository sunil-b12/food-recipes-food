import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Seafood from '../components/Seafood'
import Dessert from '../components/Dessert '
import Cta from '../components/Cta'
import Collection from '../components/Collection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Seafood />
      <Dessert />
      <Popular />
      <Cta />
      <Collection />
      <Footer />
    </div>
  )
}

export default Home
