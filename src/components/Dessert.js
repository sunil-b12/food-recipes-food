import React from 'react'
import { useGetFilterByCatagoriesQuery } from '../features/foodApi'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router';


const Dessert  = () => {
  const {data, isLoading, isError} = useGetFilterByCatagoriesQuery('Dessert')
  const dessertData = data?.meals.slice(3, 9);

  const nav = useNavigate()


    if (isLoading) {
      return <div className='w-[32%] mx-auto mt-14'>
        <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
      </div>
    }

  return (
    <div className='container mt-[4rem]'>
    <div className='flex justify-between flex-wrap gap-4'>
        <h3 className='text-3xl font-semibold text-blue-gray-900'>Sweet Tooth</h3>
        <NavLink to='./dessert' className='bg-[#ff642f] text-white font-medium border-solid border-2 border-sky-500 py-1 px-4 rounded-md mb-4'>View All</NavLink>
     </div>
     <div className='grid-card-06 my-7 cursor-pointer'>
          {
            dessertData && dessertData.map((data) =>{
                return <div key={data.idMeal} className='flex flex-col gap-3 items-start cursor-pointer'
                onClick={() => {
                    nav(`/recipes/${data.idMeal}`, { state: data });
                  }}
                >
                        <div className='rounded-full'>
                        <img src={data.strMealThumb} alt="" className='w-[70%] rounded-full transform transition duration-500 hover:scale-125 sm:hover:scale-100' />
                        </div>
                        <h4 className='font-bold text-base'>{data.strMeal}</h4>
                    </div>
            })
          }
        </div>
    </div>
  )
}

export default Dessert 