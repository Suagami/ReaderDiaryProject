import useQuery, { Options } from '../useQuery'

type registerData = {
  data: {
    id: number
    email: string
    username: string
    avatar: any
  }
}

const useRegister = (email: string, username: string, password: string) => {
  const queryOptions: Options = {
    url: '/api/auth/register',
    method: 'POST',
    body: {
      email: email,
      username: username,
      password: password,
    },
  }

  const { customFetch, data, error } = useQuery<registerData>(queryOptions)

  return {
    register: customFetch,
    data: data?.data,
    error,
  }
}

export default useRegister
