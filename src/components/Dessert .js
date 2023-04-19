import React from 'react'
import { useGetDessertQuery } from '../features/foodApi'

const Dessert  = () => {
    const {data, isLoading, isError} = useGetDessertQuery('/filter.php')

    if (isLoading) {
        return <div className='w-[32%] mx-auto mt-14'>
          <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
      }

   const seafoodData = data?.meals.slice(0, 3);

  return (
    <div className='container my-8'>
      <h3 className='text-3xl font-semibold text-blue-gray-900'>Sweet Tooth</h3>
      <div className='grid-card my-5'>
          {
            seafoodData && seafoodData.map((data) =>{
              return <div key={data.idMeal} className='bg-pink rounded-xl shadow-xl cursor-pointer'>
                  <img src={data.strMealThumb} alt="" className='rounded-t-xl'/>
                  <div className='p-5 my-0'>
                      <h4 className='text-xl font-medium text-blue-gray-900'>{data.strMeal}</h4>
                  </div>
              </div>
            })
          }
      </div>
    </div>
  )
}

export default Dessert