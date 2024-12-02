import { useEffect } from 'react'
import useQuery, { Options } from '../useQuery'
import { log } from 'console'
import useHasAuth from './useHasAuth'

type LogInData = {
  token: string
  error?: string
}

const useLogIn = (username: string, password: string) => {
  const { setHasAuth } = useHasAuth()

  const queryOptions: Options = {
    url: 'api/auth/login',
    method: 'POST',
    body: {
      username: username,
      password: password,
    },
  }

  const { customFetch, data, error } = useQuery<LogInData>(queryOptions)

  useEffect(() => {
    if (data?.token) {
      localStorage.setItem('authToken', data.token)
      setHasAuth(true)
    }
  }, [data])

  return {
    logIn: customFetch,
    data,
    error,
  }
}

export default useLogIn
