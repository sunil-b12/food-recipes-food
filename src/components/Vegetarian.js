import React from 'react'
import { useGetFilterByCatagoriesQuery } from '../features/foodApi'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router';
import Error from './Error';


export const Vegetarian = () => {
  const { data, isLoading, isError } = useGetFilterByCatagoriesQuery('Vegetarian')

  const nav = useNavigate()

  if (isLoading) {
    return <div className='w-[32%] mx-auto mt-14'>
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  const vegetarianData = data?.meals.slice(0, 3);

  return (
    <div className='container'>
      <div className='flex justify-between flex-wrap gap-4'>
        <h3 className='text-3xl font-semibold text-blue-gray-900'>Vegetarian Items</h3>
        <NavLink to='./Datashow' className='bg-[#ff642f] text-white font-medium border-solid border-2 border-sky-500 py-1 px-4 rounded-md mb-4'>View All</NavLink>
      </div>
      <div className='grid-card my-5'>
        {
          vegetarianData && vegetarianData.map((data) => {
            return <div key={data.idMeal} className='rounded-xl shadow-xl cursor-pointer'
              onClick={() => {
                nav(`/recipes/${data.idMeal}`, { state: data });
              }}
            >
              <img src={data.strMealThumb} alt="" className='rounded-t-xl' />
              <div className='p-5 my-0'>
                <h4 className='text-xl font-semibold text-blue-gray-900'>{data.strMeal}</h4>
              </div>
            </div>
          })
        }
      </div>
      <Error error={isError} />
    </div>
  )
}

export default Vegetarian