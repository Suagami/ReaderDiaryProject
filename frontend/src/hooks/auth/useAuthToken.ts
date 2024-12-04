import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useAuthToken = () => {
  const [token, setToken] = useState<string>(
    localStorage.getItem('authToken') || ''
  )

  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      localStorage.setItem('authToken', token)
      navigate('/')
    } else {
      localStorage.removeItem('authToken')
      navigate('/auth')
    }
  }, [token])

  return {
    token,
    setToken,
  }
}

export default useAuthToken
