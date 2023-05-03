import React from 'react'
import { useGetRandomMealsQuery } from '../features/foodApi'
import { useNavigate } from 'react-router';

const Hero = () => {
 const {data, isError, isLoading} = useGetRandomMealsQuery();
 const nav = useNavigate()

  if (isLoading) {
    return <div className='w-[32%] mx-auto mt-14'>
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }
  const randomsMeals = data?.meals
  
  return (
    <div className='hero container | my-14 shadow-md rounded-lg md:mt-[8rem]'>
     {
      randomsMeals && randomsMeals.map((meals) =>{
          return <div key={meals.idMeal} className='even-column' >
                <img src={meals.strMealThumb} alt="" className='w-full h-full'/>
                <div className='bg-[#e3f1ff] flex items-center px-10 sm:px-4 '>
                  <div className='md:my-5 '>
                    <h2 className='text-6xl text-blue-gray-900 font-semibold pt-5'>{meals.strCategory}</h2>
                    <p className='text-blue-gray-900 font-medium text-base py-5'>{meals.strInstructions.substring(0,300) + '........'}</p>
                    <button className='bg-[#ff642f] text-white font-medium border-solid border-2 border-sky-500 py-1 px-4 rounded-md mb-4'
                    onClick={() => {
                      nav(`/recipes/${meals.idMeal}`, { state: meals });
                    }}
                    >Read More</button>
                  </div>
                </div>
            </div>

      })
     }
    </div>
  )
}

export default Hero