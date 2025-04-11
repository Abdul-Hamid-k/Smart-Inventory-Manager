import React, { useContext, useState } from 'react'
import { UserDataContext } from '../../context/UserContext'
import { NavLink } from 'react-router-dom'
import assets from '../../assets/assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(UserDataContext)
  const { userData } = useContext(UserDataContext)


  // console.log(userData)


  useGSAP(() => {
    const tl = gsap.timeline()
    tl.from('nav h2', {
      y: -20,
      opacity: 0,
      duration: 0.4
    })

    tl.from('nav a', {
      y: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1
    })

    tl.from('nav #user-icon, nav #hamburger-icon', {
      y: -20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1
    })
  }, [])


  return (
    <nav className=' flex justify-between items-center py-3 overflow-x-hidden'>
      <h2 className='font-medium text-primary text-lg cursor-pointer'>LogiStock</h2>

      {/* mobile screen */}
      <div className={`${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}  duration-300 absolute top-0 left-0 bg-white/20 w-full h-full flex flex-col justify-center items-center gap-8 list-none text-xl backdrop-blur-md z-10`}>

        <img
          onClick={() => setIsMenuOpen(false)}
          src={assets.BackIcon}
          alt="back icon"
          className='w-8 absolute top-5 right-5' />

        <NavLink to='/dashboard'
          onClick={(e) => {
            // e.preventDefault()
            setIsMenuOpen(false)
          }}
          className={({ isActive }) => isActive ? 'text-primary font-medium' : 'relative inline-block after:block after:absolute after:rounded-full after:bg-primary after:h-[0.125rem] after:w-[1rem] hover:after:w-[95%] hover:after:transition-all hover:after:duration-300 after:duration-300'}>
          Dashboard
        </NavLink>

        <NavLink to='/inventory'
          onClick={() => {
            setIsMenuOpen(false)
          }}
          className={({ isActive }) => isActive ? 'text-primary font-medium' : 'relative inline-block after:block after:absolute after:rounded-full after:bg-primary after:h-[0.125rem] after:w-[1rem] hover:after:w-[95%] hover:after:transition-all hover:after:duration-300 after:duration-300'}>
          Inventory
        </NavLink>

        <NavLink to='/sales'
          onClick={() => {
            setIsMenuOpen(false)
          }}
          className={({ isActive }) => isActive ? 'text-primary font-medium' : 'relative inline-block after:block after:absolute after:rounded-full after:bg-primary after:h-[0.125rem] after:w-[1rem] hover:after:w-[95%] hover:after:transition-all hover:after:duration-300 after:duration-300'}>
          Sales
        </NavLink>

        <NavLink to='/purchases'
          onClick={() => {
            setIsMenuOpen(false)
          }}
          className={({ isActive }) => isActive ? 'text-primary font-medium' : 'relative inline-block after:block after:absolute after:rounded-full after:bg-primary after:h-[0.125rem] after:w-[1rem] hover:after:w-[95%] hover:after:transition-all hover:after:duration-300 after:duration-300'}>
          Purchases
        </NavLink>

        <NavLink to='/customers'
          onClick={() => {
            setIsMenuOpen(false)
          }}
          className={({ isActive }) => isActive ? 'text-primary font-medium' : 'relative inline-block after:block after:absolute after:rounded-full after:bg-primary after:h-[0.125rem] after:w-[1rem] hover:after:w-[95%] hover:after:transition-all hover:after:duration-300 after:duration-300'}>
          Customers
        </NavLink>

      </div>

      {/* laptop screen */}
      <div className="hidden md:flex gap-8 list-none">
        <NavLink to='/dashboard'
          className={({ isActive }) => isActive ? 'text-primary font-medium' : 'relative inline-block after:block after:absolute after:rounded-full after:bg-primary after:h-[0.125rem] after:w-[1rem] hover:after:w-[95%] hover:after:transition-all hover:after:duration-300 after:duration-300'}>
          Dashboard
        </NavLink>

        <NavLink to='/inventory'
          className={({ isActive }) => isActive ? 'text-primary font-medium' : 'relative inline-block after:block after:absolute after:rounded-full after:bg-primary after:h-[0.125rem] after:w-[1rem] hover:after:w-[95%] hover:after:transition-all hover:after:duration-300 after:duration-300'}>
          Inventory
        </NavLink>

        <NavLink to='/sales'
          className={({ isActive }) => isActive ? 'text-primary font-medium' : 'relative inline-block after:block after:absolute after:rounded-full after:bg-primary after:h-[0.125rem] after:w-[1rem] hover:after:w-[95%] hover:after:transition-all hover:after:duration-300 after:duration-300'}>
          Sales
        </NavLink>

        <NavLink to='/purchases'
          className={({ isActive }) => isActive ? 'text-primary font-medium' : 'relative inline-block after:block after:absolute after:rounded-full after:bg-primary after:h-[0.125rem] after:w-[1rem] hover:after:w-[95%] hover:after:transition-all hover:after:duration-300 after:duration-300'}>
          Purchases
        </NavLink>

        <NavLink to='/customers'
          className={({ isActive }) => isActive ? 'text-primary font-medium' : 'relative inline-block after:block after:absolute after:rounded-full after:bg-primary after:h-[0.125rem] after:w-[1rem] hover:after:w-[95%] hover:after:transition-all hover:after:duration-300 after:duration-300'}>
          Customers
        </NavLink>

      </div>

      {/* User-icon and menu */}
      <div className="flex gap-2 ">
        {/* TODO: User Image */}
        {/* <img src="" alt="" /> */}
        <div id='user-icon' className="shrink-0 flex justify-center text-white font-medium items-center h-8 w-8  bg-primary rounded-full">
          <span className='leading-none'>
            {userData?.firstname[0].toUpperCase()}
          </span>
        </div>

        <img
          id='hamburger-icon'
          onClick={() => setIsMenuOpen(true)}
          src={assets.HamburgerIcon}
          alt="Hamburger Icon"
          className='block md:hidden w-8 ' />
      </div>


    </nav>
  )
}

export default Header