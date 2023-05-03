import React from 'react'
import { useGetMealsByCategoryQuery } from '../features/foodApi'
import { useNavigate } from 'react-router';
import Error from './Error';

const Popular = () => {
  const { data, isError, isLoading } = useGetMealsByCategoryQuery()

  const nav = useNavigate()


  if (isLoading) {
    return <div className='w-[32%] mx-auto mt-14'>
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  const catagories = data?.categories.slice(0, 12);

  return (
    <div className='container mt-[4rem]'>
      <h3 className='text-3xl font-semibold text-blue-gray-900'>Popular Catagories</h3>
      <div className='grid-card my-7 cursor-pointer'>
        {
          catagories && catagories.map((data) => {
            return <div key={data.idCategory} className='flex flex-col gap-3 items-center cursor-pointer'
              onClick={() => {
                nav(`/recipes/catagory/${data.strCategory}`, { state: data });
              }}
            >
              <div className=''>
                <img src={data.strCategoryThumb} alt="" className='w-full transform transition duration-500 hover:scale-125 sm:hover:scale-100' />
              </div>
              <h4 className='font-bold text-base'>{data.strCategory}</h4>
            </div>
          })
        }
      </div>
      <Error error={isError} />
    </div>
  )
}

export default Popular