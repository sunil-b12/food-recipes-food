import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../Image/Header-logo.png'
import { useFormik } from 'formik';
import Navbar from './Navbar';
const Header = () => {

  const [isOpen, setIsopen] = useState(true);
  const [searchOpen, setSearchOpen] = useState(true)

  const nav = useNavigate();
  const formik = useFormik({
    initialValues: {
      search: ''
    },
    onSubmit: (val, { resetForm }) => {
      resetForm()
      nav(`recipes/search/${val.search}`)

    }

  })

  console.log(formik)

  return (
    <div className='relative md:shadow-xl md:fixed top-0 md:w-[100%] md:bg-[#FFFFFF] md:z-50'>
      <form onSubmit={formik.handleSubmit} className={`h-[50px] mx-auto container ${searchOpen ? 'hidden' : 'block'}`}>
        <div className='flex items-center border-b-[2px] border-black'>
          <input type="text"
            name='search'
            placeholder='Search'
            value={formik.values.search}
            onChange={formik.handleChange}
            className='w-[98%] h-[50px]  text-black text-lg outline-none' />
          <button><i className="fa-solid fa-xmark" onClick={formik.handleReset}></i></button>

        </div>
      </form>
      <div className='relative py-6 md:bg-[#e2e2e2]'>
        <div className='container | flex justify-between items-center'>
          <div className=''>
            <NavLink to="/">
              <img src={logo} className='w-[200px] md:w-[150px]' alt='Company Logo'></img>
            </NavLink>
          </div>
          <div className={`flex w-full justify-between md:flex-col md:absolute md:top-[3.5rem] md:items-start md:pb-[3rem] md:mt-[2rem] md:bg-[#e2e2e2] md:left-0 md:w-full gap-7 ${isOpen ? 'md:hidden' : 'flex'}`}>
            <Navbar />
            <hr className='hidden w-[95%] mx-auto h-[2px] bg-black md:block md:p-0'></hr>
            <div className='space-x-6 flex items-center md:w-[80%] md:justify-between md:mx-auto'>
              <button className='' >
                <i className="fa-solid fa-magnifying-glass" onClick={() => setSearchOpen(!searchOpen)}></i>
              </button>
              <button className='border-solid border-2 border-gray-400 py-1 px-7 rounded font-semibold text-xs hover:scale-105'>Login</button>
            </div>
          </div>
          <div className='hidden md:block'>
            <button onClick={() => setIsopen(!isOpen)}>{isOpen ? <i className="fa-solid fa-bars fa-xl"></i> : <i className="fa-solid fa-xmark fa-xl"></i>}</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header