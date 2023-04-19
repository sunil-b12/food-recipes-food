import React from 'react'
import logo from '../Image/Header-logo.png'
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {

  const footerNav = [
      {
        label: 'About us',
        path: 'about us'

      },
      {
        label: 'Careers',
        path: 'careers'

      },
      {
        label: 'Contact us',
        path: 'contact us'

      },
      {
        label: 'Feedback',
        path: 'feedback'

      },
      {
        label: 'About us',
        path: 'About us'

      },

  ]

  const follow = [
    {
      label: 'Facebook',
      path: 'facebook'
    },
    {
      label: 'Twitter',
      path: 'twitter'
    },
    {
      label: 'Instagram',
      path: 'Instagram  '
    },
    {
      label: 'Youtube',
      path: 'youtube'
    }
  ]

  const legal = [
    {
      label: 'Terms',
      path: 'terms'
    },
    {
      label: 'Conditions',
      path: 'conditions'
    },
    {
      label: 'Cookies',
      path: 'cookies'
    },
    {
      label: 'Copyright',
      path: 'copyright'
    }
  ]
  return (
   <footer className='bg-[#f9f9f9] py-16 mt-[7rem] sm:mt-[3rem]'>
        <div className='container my-30 flex flex-wrap gap-7'>
            <div className='w-[min(650px)]'>
                <NavLink><img src={logo} alt=""  className='w-[200px]'/></NavLink>
                <p className='w-[min(400px,100%)] text-[#7f7f7f] py-6'>"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the chrams of pleasure of the movement."</p>
            </div>
            <div className='w-[min(150px)]'>
              <h3 className='font-bold pb-6'>Tastebite</h3>
                {
                  footerNav.map((nav, i)=>{
                    return <NavLink key={i} to={nav.pa} className='flex flex-col text-[#7f7f7f]'>{nav.label}</NavLink>
                  })
                }
            </div>
            <div className='w-[min(150px)]'>
              <h3 className='font-bold pb-6'>Follow</h3>
                {
                  follow.map((nav, i)=>{
                    return <NavLink key={i} to={nav.path} className='flex flex-col text-[#7f7f7f]'>{nav.label}</NavLink>
                  })
                }
            </div>
            <div>
              <h3 className='font-bold pb-6'>Legal</h3>
                {
                  legal.map((nav, i)=>{
                    return <NavLink key={i} to={nav.path} className='flex flex-col text-[#7f7f7f]'>{nav.label}</NavLink>
                  })
                }
            </div>
        </div>
   </footer>
  )
}

export default Footer