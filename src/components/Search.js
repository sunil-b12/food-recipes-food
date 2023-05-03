import React, { useEffect } from 'react'
import { useGetSearchMealsQuery } from '../features/foodApi'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router';
import Error from './Error';


const Search = () => {
  const { search } = useParams();
  const { data, isError,error } = useGetSearchMealsQuery(search)

  const nav = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [search]);


  
  if (isError) {
    return <div className='w-[32%] mx-auto mt-14'>
      <h1>Recipes not Found</h1>
    </div>
  }

  console.log(error)
  return (
    <div className='container mt-[4rem]  md:mt-[8rem]'>
      <div className='mb-[2rem]'>
        <h3 className='text-4xl font-bold text-blue-gray-900'>Search Items</h3>
      </div>
      <div className='grid-card my-5'>
        {
          data && data?.meals.map((data) => {
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

export default Search