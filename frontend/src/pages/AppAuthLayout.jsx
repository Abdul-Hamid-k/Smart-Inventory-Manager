import React from 'react'
import Header from '../components/Auth/Header.jsx'
import Footer from '../components/Auth/Footer.jsx'
import { Outlet } from 'react-router-dom'

const AppAuthLayout = () => {
  return (
    <div className='px-5 sm:px-[4%] pb-8 max-w-[80rem] mx-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppAuthLayout