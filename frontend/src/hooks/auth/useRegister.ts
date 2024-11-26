import { useState, useCallback } from 'react'

type registerData = {
  data: {
    id: string
    email: string
    username: string
    avatar: any
  }
} | null

const useRegister = (email: string, username: string, password: string) => {
  const [data, setData] = useState<registerData>(null)
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const [error, setError] = useState<string | null>()

  const query = '/api/auth/register'
  const qyeryParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      username: username,
      password: password,
    }),
  }

  const register = useCallback(async () => {
    setIsFetching(true)
    setError('')

    try {
      const response = await fetch(query, qyeryParams)
      if (!response.ok) {
        const err = await response.json()
        throw new Error(`${err.error}`)
      }

      const result = await response.json()
      setData(result)
    } catch (err) {
      setError((err as Error).message)
    }

    setIsFetching(false)
  }, [email, username, password])

  return {
    register,
    data,
    error,
  }
}

export default useRegister
