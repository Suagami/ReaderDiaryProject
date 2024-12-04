import { useEffect } from 'react'
import useQuery, { Options } from '../useQuery'
import useAuthToken from './useAuthToken'

type LogInData = {
  token: string
  error?: string
}

const useLogIn = (username: string, password: string) => {
  const { setToken } = useAuthToken()
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
      setToken(data.token)
      console.log('authToken added', data.token)
    }
  }, [data])

  return {
    logIn: customFetch,
    data,
    error,
  }
}

export default useLogIn
