import React, { createContext, useContext, useState } from 'react'

const UserDataContext = createContext({})

const UserContext = ({ children }) => {
  const [userData, setUserData] = useState({})
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const value = {
    userData,
    setUserData,
    isMenuOpen,
    setIsMenuOpen
  }
  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  )
}

export { UserDataContext }
export default UserContext