import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";


const Dropdown = ({ submenus, dropdown }) => {
    return (
        <ul className={`mt-[0.75rem] absolute rounded-md border-solid py-3 px-9 shadow-[13px_2px_10px_3px_#00000024] bg-white ${dropdown ? "hidden" : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className="list-none pt-4">
                    <NavLink to={submenu.path} className='text-base font-bold hover:scale-105'>{submenu.label}</NavLink>
                </li>
            ))}
        </ul>
    )
}
export default Dropdown