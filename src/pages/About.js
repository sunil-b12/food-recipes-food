import React from 'react'
import { useGetRandomMealsQuery } from '../features/foodApi'

const About = () => {
    const { data } = useGetRandomMealsQuery()


    return (
        <div className='container'>

            {
                data && data?.meals.map((data) => {
                    return <div key={data.idMeal} className='md:mt-[8rem]'>
                        <h1 className='text-3xl font-bold mt-7'>About</h1>
                        <h2 className='my-6 text-4xl font-medium'>We're a group of foodies who love cooking and the internet</h2>
                        <img src={data.strMealThumb} alt="" className='w-full h-[600px] object-cover rounded-lg' />
                        <p className='text-base font-normal text-blue-gray-900 items-stretch py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.
                            Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis.
                            Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis.
                            Egestas in risus sit nunc nunc, arcu donec nam etiam. Lorem ipsum dolor sit amet, consectetur adipiscing elit

                        </p>

                        <div className='even-column gap-[3rem] my-8'>
                            <div>
                                <h1 className='text-4xl font-bold'>Simple, Easy <br></br>Recipes For All</h1>
                                <p className='text-base font-normal text-blue-gray-900 items-stretch py-[2rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eum nulla dolores labore officia, culpa magni iste quaerat accusantium laboriosam sequi ratione perspiciatis tempora suscipit architecto, minima nostrum ipsa voluptate, ea possimus iure quam? Accusantium saepe laborum facilis numquam molestias alias tempore quam voluptatum eveniet!</p>
                            </div>
                            <img src={data.strMealThumb} alt="" className='w-full h-[500px] object-cover rounded-lg' />
                        </div>
                    </div>
                })
            }

        </div>
    )
}

export default About