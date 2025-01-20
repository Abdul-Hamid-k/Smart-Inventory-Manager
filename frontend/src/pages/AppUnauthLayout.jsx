import React, { useEffect, useState } from 'react'
import Header from '../components/Unauth/Header.jsx'
import Footer from '../components/Unauth/Footer.jsx'
import { Outlet, useNavigate } from 'react-router-dom'



const AppUnauthLayout = () => {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/dashboard')
    }
    setIsLoading(false)
  }, [])

  return (
    <>
      {
        isLoading
          ? <p className='w-full h-screen flex justify-center items-center'>Loading...</p>
          : (
            <div className=' px-3 md:px-[2%] pb-8 max-w-[80rem] mx-auto'>

              <Header />
              <Outlet />
              {/* <Footer /> */}
            </div>
          )
      }
    </>

  )
}

export default AppUnauthLayout