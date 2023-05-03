import React from 'react'
import { useParams } from 'react-router'
import { useGetMealsDetailsIdQuery } from '../features/foodApi';
import SimilarData from './SimilarData';
import Error from './Error';

const Details = () => {
  const { idMeal } = useParams();
  const { data, isLoading, isError } = useGetMealsDetailsIdQuery(idMeal)


  
  if (isLoading) {
    return <div className='w-[32%] mx-auto mt-14'>
      <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  }

  
  return (
    <div className='container mt-[6rem] md:mt-[8rem]'>
      {
        data && data?.meals.map((data) => {
          return <div key={data.idMeal} className='w-full grid gap-5'>
            <h1 className='text-4xl font-bold'>{data.strMeal}</h1>
            <div className='flex gap-5 flex-wrap'>
              <span className='flex gap-2 items-center'>
                <i className="fa-solid fa-utensils"></i>
                <h3>Catagories: <b>{data.strCategory}</b></h3>
              </span>
              <span className='flex gap-2 items-center'>
                <i className="fa-solid fa-location-dot"></i>
                <h3>Place: <b>{data.strArea}</b></h3>
              </span>
            </div>
            <div className='w-full h-[700px] rounded-xl'>
              <img src={data.strMealThumb} alt="" className='w-full h-[700px] rounded-xl' />
            </div>
            <div className='mt-8 flex items-center flex-wrap gap-9 w-[40%] justify-between md:w-[70%] sm:w-full'>
              <ul>
                <h2 className='text-2xl font-bold uppercase mb-5'>Ingredients</h2>
                <li className='space-x-2 mt-3'><i className="fa-solid fa-check"></i><b className=''>{data.strIngredient1}</b></li>
                <li className='space-x-2 mt-3'><i className="fa-solid fa-check"></i><b className=''>{data.strIngredient2}</b></li>
                <li className='space-x-2 mt-3'><i className="fa-solid fa-check"></i><b className=''>{data.strIngredient3}</b></li>
                <li className='space-x-2 mt-3'><i className="fa-solid fa-check"></i><b className=''>{data.strIngredient4}</b></li>
                <li className='space-x-2 mt-3'><i className="fa-solid fa-check"></i><b className=''>{data.strIngredient5}</b></li>
                <li className='space-x-2 mt-3'><i className="fa-solid fa-check"></i><b className=''>{data.strIngredient6}</b></li>
                <li className='space-x-2 mt-3'><i className="fa-solid fa-check"></i><b className=''>{data.strIngredient7}</b></li>
                <li className='space-x-2 mt-3'><i className="fa-solid fa-check"></i><b className=''>{data.strIngredient8}</b></li>
                <li className='space-x-2 mt-3'><i className="fa-solid fa-check"></i><b className=''>{data.strIngredient9}</b></li>
              </ul>
              <ul>
                <h2 className='text-2xl font-bold uppercase mb-5'>Measure</h2>
                <li className='mt-3'><b className=''>{data.strMeasure1}</b></li>
                <li className='mt-3'><b className=''>{data.strMeasure2}</b></li>
                <li className='mt-3'><b className=''>{data.strMeasure3}</b></li>
                <li className='mt-3'><b className=''>{data.strMeasure4}</b></li>
                <li className='mt-3'><b className=''>{data.strMeasure5}</b></li>
                <li className='mt-3'><b className=''>{data.strMeasure6}</b></li>
                <li className='mt-3'><b className=''>{data.strMeasure7}</b></li>
                <li className='mt-3'><b className=''>{data.strMeasure8}</b></li>
                <li className='mt-3'><b className=''>{data.strMeasure9}</b></li>
              </ul>
            </div>
            <div className='mt-5'>
              <h2 className='text-2xl font-bold uppercase mb-2'>Instructions</h2>
              <p className='font-normal text-base text-justify'>{data.strInstructions}</p>
            </div>
            <SimilarData category={data.strCategory} />
          </div>
        })
      }
      <Error error={isError} />
    </div>
  )
}

export default Details