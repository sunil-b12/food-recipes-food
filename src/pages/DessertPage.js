import React, { useEffect } from 'react'
import { useGetFilterByCatagoriesQuery } from '../features/foodApi'
import { useNavigate } from 'react-router';

const DessertPage = () => {

    const { data, isLoading, isError } = useGetFilterByCatagoriesQuery('Dessert')
    const nav = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [data]);


    if (isLoading) {
        return <div className='w-[32%] mx-auto mt-14'>
            <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json" background="transparent" speed="1" loop autoplay></lottie-player>
        </div>
    }


    const dessertData = data?.meals;

    return (
        <div className='container mt-[3rem] md:mt-[7rem]'>
            <h3 className='text-4xl font-bold text-blue-gray-900'>Dessert</h3>
            <div className='grid-card my-7 cursor-pointer'>
                {
                    dessertData && dessertData.map((data) => {
                        return <div key={data.idMeal} className='flex flex-col gap-3 items-center cursor-pointer'
                            onClick={() => {
                                nav(`/recipes/${data.idMeal}`, { state: data });
                            }}
                        >
                            <div className=''>
                                <img src={data.strMealThumb} alt="" className='w-full transform transition duration-500 hover:scale-110 sm:hover:scale-100' />
                            </div>
                            <h4 className='font-bold text-base'>{data.strMeal}</h4>
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default DessertPage