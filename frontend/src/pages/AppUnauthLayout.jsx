import React, { useEffect } from 'react'
import Header from '../components/Unauth/Header.jsx'
import Footer from '../components/Unauth/Footer.jsx'
import { Outlet } from 'react-router-dom'

const AppUnauthLayout = () => {

  return (
    <div className=' px-5 sm:px-[4%] pb-8 max-w-[80rem] mx-auto'>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default AppUnauthLayout