import React from 'react'
import { Link } from 'react-router-dom'
import { LoginImg } from '../assets/assets'

const Register = () => {
  return (
    <div className=" flex justify-center sm:justify-evenly gap-10 items-center min-h-[calc(100vh-5.5rem)] ">
      {/* 5.5rem => 2rem padding bottom and 3.5 rem header height */}

      <img className='hidden md:block md:w-1/3 lg:w-1/3' src={LoginImg} alt="" />

      <div className='w-full sm:w-2/3 md:w-2/5 lg:w-1/3  mx-3 h-fit py-10 px-3 sm:px-4 rounded-lg bg-white'>
        <h2 className='text-3xl font-medium text-center mb-12 text-primary'>Register</h2>

        <form className='flex flex-col gap-3 text-sm'>

          <div className="flex justify-between gap-3">
            <input
              className='w-1/2 px-3 py-2 outline-none focus:border-primary border-[0.05rem] rounded-lg bg-transparent border-gray-300 active:border-primary/50 text-black placeholder:text-gray-500'
              type='string'
              name='firstname'
              required placeholder='First Name' />

            <input
              className='w-1/2 px-3 py-2 outline-none focus:border-primary border-[0.05rem] rounded-lg bg-transparent border-gray-300 active:border-primary/50 text-black placeholder:text-gray-500'
              type='string'
              name='lastname'
              required placeholder='Last Name' />
          </div>
          <input
            className='w-full px-3 py-2 outline-none focus:border-primary border-[0.05rem] rounded-lg bg-transparent border-gray-300 active:border-primary/50 text-black placeholder:text-gray-500'
            type='email'
            name='email'
            required placeholder='Email' />

          <input
            className='w-full px-3 py-2 outline-none focus:border-primary border-[0.05rem] rounded-lg bg-transparent border-gray-300 active:border-primary/50 text-black placeholder:text-gray-500'
            type='password'
            name='password'
            required placeholder='Password' />

          <input
            className='w-full px-3 py-2 outline-none focus:border-primary border-[0.05rem] rounded-lg bg-transparent border-gray-300 active:border-primary/50 text-black placeholder:text-gray-500'
            type='confirmPassword'
            name='confirmPassword'
            required placeholder='Confirm Password' />


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
    </div>

  )

}

export default Register