import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginImg } from '../assets/assets'
import axios from 'axios'
import { UserDataContext } from '../context/UserContext.jsx'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // const [user, setUser] = useState({})
  const { setUserData } = useContext(UserDataContext)
  // console.log(useContext(UserDataContext))


  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('Form submitted')
    // console.log( email, password)

    const userData = {
      email,
      password,
    }

    setIsLoading(true)
    // Login api call
    axios.post(import.meta.env.VITE_API_URL + '/login', userData).
      then(response => {
        // console.log(response)

        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          // setUser(response.data.user);
          setIsLoading(false);
          setUserData(response.data.user);
          navigate('/dashboard')
        }
      }).
      catch(error => {
        // console.error('error: ', error)
        setErrorMessage(error.response.data.message)
      });

    // clear form inputs
    setEmail('')
    setPassword('')
    setErrorMessage('')

  }

  return (
    <div className=" flex justify-center sm:justify-evenly gap-10 items-center min-h-[calc(100vh-5.5rem)] ">
      {/* 5.5rem => 2rem padding bottom and 3.5 rem header height */}
      {isLoading ? <p className='w-full h-full flex justify-center items-center'>Loading...</p> : (
        <>
          <img className='hidden md:block md:w-1/3 lg:w-1/3' src={LoginImg} alt="" />

          <div className='w-full sm:w-2/3 md:w-2/5 lg:w-1/3  mx-3 h-fit py-10 px-3 sm:px-4 rounded-lg bg-white'>
            <h2 className='text-3xl font-medium text-center mb-10 text-primary'>Login</h2>

            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-3 text-sm'>

              {/* email */}
              <input
                className='w-full px-3 py-2 outline-none focus:border-primary border-[0.05rem] rounded-lg bg-transparent border-gray-300 active:border-primary/50 text-black placeholder:text-gray-500'
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required placeholder='Email' />

              {/* password */}
              <input
                className='w-full px-3 py-2 outline-none focus:border-primary border-[0.05rem] rounded-lg bg-transparent border-gray-300 active:border-primary/50 text-black placeholder:text-gray-500'
                type='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required placeholder='Password' />
              <Link className='font-medium text-primary text-end text-sm'>Forgot Password?</Link>


              <p className='text-red-400'>{errorMessage}</p>

              <button type='submit'
                className='mt-10 w-auto rounded-lg text-white bg-primary px-5 py-3 text-lg font-medium mx-4'>
                Register
              </button>
            </form>

            <p
              className='text-sm text-center pt-3'>Don't have an account?
              <Link to='/register' className='text-primary ml-1 font-medium'>
                Register
              </Link>
            </p>

          </div>
        </>)}
    </div>

  )

}

export default Login