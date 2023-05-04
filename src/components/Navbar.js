import React from 'react'
import MenuItem from './MenuItem';


const Navbar = () => {
    
  const navs = [
    {
      label: 'Home',
      path: '/'

    },
    {
      label: 'Recipes Page',
      path: 'recipes',
      subMenu: [
        {
          label: 'Seafood',
          path:  'seafood'
        },
        {
          label:'Vegetarian',
          path: 'vegetarian'
        },
        {
          label: 'Dessert',
          path:'dessert'
        }
      ]
    },
    {
      label: 'About',
      path: 'about'

    },
    {
      label: 'Blog',
      path: 'blog'

    },
    {
      label: 'Contact Us',
      path: 'contact'

    },

  ]
  return (
    <div className='flex items-center w-full'>
         <nav className={`navigation | flex justify-center w-full gap-6 md:flex-col md:pl-6 md:pt-4`}>
              {navs.map((menu, index) => {
                return <MenuItem items={menu} key={index}/>
              })}
           
            </nav>
    </div>
  )
}

export default Navbar