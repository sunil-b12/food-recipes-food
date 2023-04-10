import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import logo from '../Image/Header-logo.png'
const Header = () => {

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
    <div>
       <div className='py-4' style={{background:'#e2e2e2'}}>
          <div className='container | flex justify-between items-center'> 
            <div className='space-x-4'>
                <a href='#'><i className="fa-brands fa-facebook-f"></i></a>
                <a href='#'><i className="fa-brands fa-twitter"></i></a>
                <a href='#'><i className="fa-brands fa-instagram"></i></a>
            </div>
            <div className='space-x-6 flex items-center'>
              <span className=''>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <button className='border-solid border-2 border-gray-400 py-1 px-7 rounded font-semibold text-xs hover:scale-105'>Login</button>
            </div>
          </div>
       </div>
        <div className='flex justify-center py-10'>
            <NavLink>
              <img src={logo}></img>
            </NavLink>
        </div>
       <nav className="navigation | flex justify-center gap-6">
            {navs.map((n, i)=>{
              return <NavLink className='text-base font-bold hover:scale-105' to={n.path} key={i}>{n.label}</NavLink>
            })}
       </nav>
    </div>
  )
}

export default Header