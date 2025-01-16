import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center w-full h-14 py-3'>
      <h2 className='font-medium text-primary text-lg cursor-pointer'>LogiStock</h2>

      <div className="flex gap-3 sm:gap-8">
        {/* <NavLink
          to='/login'
          className={({ isActive }) => `${isActive ? 'font-medium text-primary' : ''} cursor-pointer`}>
          Login
        </NavLink>

        <NavLink
          to='/register'
          className={({ isActive }) => `${isActive ? 'font-medium text-primary' : ''} cursor-pointer`}>
          Register
        </NavLink> */}

        <NavLink
          to='/contact-us'
          className={({ isActive }) => `${isActive ? 'font-medium text-primary' : ''} cursor-pointer`}>
          Contact Us
        </NavLink>
      </div>
    </div>
  )
}

export default Header