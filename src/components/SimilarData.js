import React, { useEffect } from 'react'
import { useGetFilterByCatagoriesQuery } from '../features/foodApi'
import { useNavigate } from 'react-router';
import Error from './Error';

const SimilarData = (category) => {
  const {data, isError, isLoading} = useGetFilterByCatagoriesQuery(category.category)

useEffect(() => {
  window.scrollTo(0, 0);
}, [category]);

const nav = useNavigate()


if (isLoading) {
    return <div className='w-[32%] mx-auto mt-14'>
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  const categoryData = data?.meals.slice(0, 8);

  console.log(categoryData)

  return (
    <div className='mt-[5rem]'>
     <div className='flex justify-between'>
        <h3 className='text-3xl font-semibold text-blue-gray-900'>You might also like</h3>
     </div>
      <div className='grid-card my-5'>
          {
            categoryData && categoryData.map((data) =>{
              return <div key={data.idMeal} className='rounded-xl shadow-xl cursor-pointer'
              onClick={() => {
                nav(`/recipes/${data.idMeal}`, { state: data });
              }}
              >
                  <img src={data.strMealThumb} alt="" className='rounded-t-xl'/>
                  <div className='p-5 my-0'>
                      <h4 className='text-xl font-medium text-blue-gray-900'>{data.strMeal}</h4>
                  </div>
              </div>
            })
          }
      </div>
      <Error error={isError}/>
    </div>
  )
}

export default SimilarData