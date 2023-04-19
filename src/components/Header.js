import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../Image/Header-logo.png'
const Header = () => {
  
    const [isOpen, setIsopen] = useState(false);

  const navs = [
    {
      label: 'Home',
      path:'Home'

    }, 
    {
      label: 'Recipe Page',
      path:'Home'

    },
    {
      label: 'About',
      path:'About'

    },
    {
      label: 'Blog',
      path:'blog'

    },
    {
      label: 'Contact Us',
      path:'contact'

    },
    
  ]

  return (
    <div className='relative sm:shadow-xl sm:fixed top-0 sm:w-[100%] sm:bg-[#FFFFFF] sm:z-50'>
       <div className='py-4' style={{background:'#e2e2e2'}}>
          <div className='container | flex justify-between items-center'> 
            <div className={`space-x-4 sm:absolute sm:bottom-0 right-5 sm:mb-4 ${isOpen ? 'sm:hidden' : 'block'}`}>
                <a href='#'><i className="fa-brands fa-facebook-f"></i></a>
                <a href='#'><i className="fa-brands fa-twitter"></i></a>
                <a href='#'><i className="fa-brands fa-instagram"></i></a>
            </div> 
            <div className='space-x-6 flex items-center sm:justify-between sm:w-[100%]'>
              <span className=''>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <div className='hidden sm:block'>
              <NavLink>
                <img src={logo} className='w-[100px]'></img>
              </NavLink>
              </div>
              <div className='hidden sm:block'>
                <button onClick={()=>setIsopen(!isOpen)}>{isOpen ?<i className="fa-solid fa-bars fa-xl"></i> : <i class="fa-solid fa-xmark fa-xl"></i>}</button>
              </div>
              <button className={`border-solid border-2 border-gray-400 py-1 px-7 rounded font-semibold text-xs hover:scale-105 sm:absolute bottom-0 left-0 sm:mb-4  ${isOpen ? 'sm:hidden' : 'block'}`}>Login</button>
            </div>
          </div>
       </div>
        <div className='flex justify-center py-10 sm:hidden'>
            <NavLink>
              <img src={logo}></img>
            </NavLink>
        </div>
       <nav className={`navigation | flex justify-center gap-6 sm:flex-col sm:items-start sm:pb-[4rem] sm:pl-6 sm:pt-4 ${isOpen ? 'sm:hidden' : 'flex '}`}>
            {navs.map((n, i)=>{
              return <NavLink className='text-base font-bold hover:scale-105' to={n.path} key={i}>{n.label}</NavLink>
            })}
            <hr className='hidden sm:block w-[95%] h-[2px] bg-black '></hr>
       </nav>
    </div>
  )
}

export default Header