import React from 'react'
import { useGetRandomMealQuery } from '../features/foodApi'


const Hero = () => {

  const {currentData} = useGetRandomMealQuery('categories.php');

  console.log(currentData.categories)


  return (
    <div className='hero | '>
      {/* {
        data && data.meals.lenght[4].map((a)=>{
          return <div key={a.idMeal}>
              <h1>{a.strMeal}</h1>
          </div>
        })
      } */}
    </div>
  )
}

export default Hero