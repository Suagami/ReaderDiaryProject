import { useState, useCallback, useEffect } from 'react'
import useQuery from '../useQuery'

const useRegister = (email: string, username: string, passwword: string) => {
  const [data, setData] = useState(null)
  const [isFetching, setIsFetching] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const query = '/api/auth/register'
  const qyeryParams = {
    method: 'POST',
    body: JSON.stringify({
      email,
      username,
      passwword,
    }),
  }

  const register = useCallback(async () => {
    setIsFetching(true)
    setError(null)

    try {
      const response = await fetch(query, qyeryParams)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const result = await response.json()
      setData(result)
    } catch (err) {
      setError((err as Error).message)
    }

    setIsFetching(false)
  }, [email, username, passwword])

  return {
    register,
  }
}

export default useRegister
