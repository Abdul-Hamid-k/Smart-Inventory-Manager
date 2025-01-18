import React, { createContext, useContext, useState } from 'react'

const UserDataContext = createContext({})

const UserContext = ({ children }) => {
  const [userData, setUserData] = useState({})

  const value = {
    userData,
    setUserData,
  }
  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  )
}

export { UserDataContext }
export default UserContext