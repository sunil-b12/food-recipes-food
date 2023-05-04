import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { NavLink, useNavigate } from "react-router-dom";


const MenuItem = ({ items }) => {
    const [dropdown, setDropdown] = useState(true);
    return (
        <li className="list-none">
            {items.subMenu ? (
                <div className='relative'>
                    <button type="button" aria-haspopup="menu" className='text-base font-bold hover:scale-105' onClick={() => setDropdown((prev) => !prev)}>
                        {items.label}{' '}
                        <i className="fa-solid fa-caret-down"></i>
                    </button>
                    <Dropdown submenus={items.subMenu} dropdown={dropdown}/>
                    
                </div>
            ) : (
                <NavLink to={items.path} className='text-base font-bold hover:scale-105'>{items.label}</NavLink>
            )}
        </li>
    )
}

export default MenuItem