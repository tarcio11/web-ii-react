import React, { createContext, useState, useContext } from 'react'
import { api } from '../services/api'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const accesToken = localStorage.getItem('@internet_banking:accesToken')
    const user = localStorage.getItem('@internet_banking:user')

    if (accesToken && user) {
      return { accesToken, user: JSON.parse(user) }
    }

    return {}
  })

  const signIn = async ({ email, password }) => {
    const response = await api.post('users/signin', {
      email,
      password
    })

    const { accesToken, user } = response.data

    localStorage.setItem('@internet_banking:accesToken', accesToken)
    localStorage.setItem('@internet_banking:user', JSON.stringify(user))

    setData({ accesToken, user })
  }

  const signOut = () => {
    localStorage.clear()
    setData({})
  }

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}