import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginImg } from '../assets/assets'
import axios from 'axios'

const Register = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)


  const [user, setUser] = useState({})

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('Form submitted')
    // console.log(firstname, lastname, email, password, confirmPassword)

    const userData = {
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    }

    setIsLoading(true)
    // registration api call
    axios.post(import.meta.env.VITE_API_URL + '/register', userData).
      then(response => {
        if (response.status === 201) {
          localStorage.setItem('token', response.data.token);
          setUser(response.data.user);
          console.log(response)
          setIsLoading(false)

          navigate('/dashboard')
        }
      }).
      catch(error => {
        // console.error('error: ', error)
        setErrorMessage(error.response.data.message)
        setIsLoading(false)

      });

    // clear form inputs
    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setErrorMessage('')

  }

  return (
    <div className=" flex justify-center sm:justify-evenly gap-10 items-center min-h-[calc(100vh-5.5rem)] ">
      {/* 5.5rem => 2rem padding bottom and 3.5 rem header height */}
      {isLoading ? <p className='w-full h-full flex justify-center items-center'>Loading...</p> : (

        <>
          <img className='hidden md:block md:w-1/3 lg:w-1/3' src={LoginImg} alt="" />

          <div className='w-full sm:w-2/3 md:w-2/5 lg:w-1/3  mx-3 h-fit py-10 px-3 sm:px-4 rounded-lg bg-white'>
            <h2 className='text-3xl font-medium text-center mb-10 text-primary'>Register</h2>

            <form
              onSubmit={handleSubmit}
              className='flex flex-col gap-3 text-sm'>

              <div className="flex justify-between gap-3">
                {/* firstname */}
                <input
                  className='w-1/2 px-3 py-2 outline-none focus:border-primary border-[0.05rem] rounded-lg bg-transparent border-gray-300 active:border-primary/50 text-black placeholder:text-gray-500'
                  type='string'
                  name='firstname'
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required placeholder='First Name' />

                {/* lastname */}
                <input
                  className='w-1/2 px-3 py-2 outline-none focus:border-primary border-[0.05rem] rounded-lg bg-transparent border-gray-300 active:border-primary/50 text-black placeholder:text-gray-500'
                  type='string'
                  name='lastname'
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  required placeholder='Last Name' />
              </div>

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

              {/* confirm password */}
              <input
                className='w-full px-3 py-2 outline-none focus:border-primary border-[0.05rem] rounded-lg bg-transparent border-gray-300 active:border-primary/50 text-black placeholder:text-gray-500'
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required placeholder='Confirm Password' />

              <p className='text-red-400'>{errorMessage}</p>

              <button type='submit'
                className='mt-10 w-auto rounded-lg text-white bg-primary px-5 py-3 text-lg font-medium mx-4'>
                Register
              </button>
            </form>

            <p
              className='text-sm text-center pt-3'>Already have an account?
              <Link to='/login' className='text-primary ml-1 font-medium'>
                Login
              </Link>
            </p>

          </div>
        </>)}

    </div>

  )

}

export default Register