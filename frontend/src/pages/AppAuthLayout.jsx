import React, { useEffect } from 'react'
import Header from '../components/Auth/Header.jsx'
import Footer from '../components/Auth/Footer.jsx'
import { Outlet } from 'react-router-dom'

const AppAuthLayout = () => {

  return (
    <div className='px-3 sm:px-[2%] lg:px-[4%] pb-8 max-w-[80rem] mx-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default AppAuthLayout