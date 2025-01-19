import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const UserProtectedWrapper = ({ children }) => {
  const { userData, setUserData } = useContext(UserDataContext)
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  console.log('userProtectedWrapper: ', token)

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }

    // console.log(import.meta.env.VITE_API_URL + '/user-profile')
    axios.get(import.meta.env.VITE_API_URL + '/user-profile', { headers: { authorization: 'Bearer ' + token } })
      .then(res => {
        // console.log(res)
        if (res.status === 200) {
          setUserData(res.data.user)
          setIsLoading(false)
        }

      }).catch(err => {
        console.error(err)
        localStorage.removeItem('token')
        navigate('/login')
        setIsLoading(false)
      })

  }, [])

  return (
    <>
      {
        isLoading
          ? <p className='w-full h-screen flex justify-center items-center'>Loading...</p>
          : <>{children}</>
      }
    </>
  )
}

export default UserProtectedWrapper