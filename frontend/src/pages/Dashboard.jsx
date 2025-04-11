import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Dashboard = () => {
  const { userData } = useContext(UserDataContext)
  // console.log(userData)
  return (
    <div>Hello {userData.firstname} </div>
  )
}

export default Dashboard