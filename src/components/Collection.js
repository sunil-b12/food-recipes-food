import React from 'react'
import { useGetCollectionFoodQuery } from '../features/foodApi'

const Collection = () => {

    const {data, isLoading, isError} = useGetCollectionFoodQuery('filter.php')

  return (
    <div className='container'>
        <h3 className='text-3xl font-semibold text-blue-gray-900 my-6'>Hand-Picked Collections</h3>
        <div className='grid-card'>
            {
                data && data?.meals.map((data)=>{
                    return <div key={data.idMeal} className='rounded-xl shadow-xl cursor-pointer'>
                            <img src={data.strMealThumb} alt="" />
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

export default Collection