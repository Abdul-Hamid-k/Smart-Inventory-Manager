import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + '/logout').
      then(res => {
        if (res.status === 200) {
          localStorage.removeItem('token');
          navigate('/login')
        }
      }).catch(err => {
        console.error(err)
        navigate('/login')
      })
  }, [])

  return (
    <div>Logout</div>
  )
}

export default Logout