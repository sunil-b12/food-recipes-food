import React from 'react'

const Cta = () => {
  return (
    <div className='bg-[#ffd7c9] py-16'>
        <div className='flex flex-col items-center w-[min(400px)] mx-auto gap-5  sm:w-full sm:px-5'>
            <h3 className='text-4xl font-semibold text-center'>Deliciousness to your inbox</h3>
            <p className='text-center'>Enjoy weekly hand picked recipes and recommendations</p>
            <form action='' className='flex w-full xs:flex-col'>
                <input type="email"  placeholder='Email Address' className='w-full py-4 px-1'/>
                <button type='submit' className='bg-[#ff642f] text-white font-bold text-base p-3'>Subscribe</button>
            </form>
            <p className='text-xs'>By joining our newsletter you agree to our <a href='#' className='underline cursor-pointer'>Terms and Conditions</a></p>
        </div>
    </div>
  )
}

export default Cta