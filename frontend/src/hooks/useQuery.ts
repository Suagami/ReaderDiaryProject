import { useState, useCallback } from 'react'

export type Options = {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'PATCH'
  body?: Record<string, any>
  headers?: Record<string, string>
}

const useQuery = <T extends Record<string, any>>(options: Options) => {
  const [data, setData] = useState<T | null>(null)
  const [isFetching, setIsFetching] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const { url, method, body, headers } = options
  const token = localStorage.getItem('authToken')

  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Token ${token}` }),
  }

  const queryParams = {
    method: method,
    headers: {
      ...defaultHeaders,
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  }

  const customFetch = useCallback(async () => {
    setIsFetching(true)
    setError(null)

    try {
      const response = await fetch(url, queryParams)
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
  }, [url, method, body, headers])

  return {
    customFetch,
    data: data,
    error,
    isFetching,
  }
}

export default useQuery
