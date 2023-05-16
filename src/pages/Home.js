import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Vegetarian from '../components/Vegetarian'
import Seafood from '../components/Seafood'
import Dessert from '../components/Dessert'
import Cta from '../components/Cta'
import Collection from '../components/Collection'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Seafood />
      <Vegetarian />
      <Dessert />
      <Cta />
      <Collection />
    </div>
  )
}

export default Home
