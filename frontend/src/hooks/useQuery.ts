// import { useState, useEffect } from 'react'

// type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
// //
// interface UseQueryResult<T> {
//   data: T | null
//   isFetching: boolean
//   error: string | null
// }

// function useQuery<T>(url: string, body: HttpMethod = 'GET'): UseQueryResult<T> {
//   const [data, setData] = useState<T | null>(null)
//   const [isFetching, setIsFetching] = useState<boolean>(true)
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     const fetchData = async () => {
//       setIsFetching(true)
//       setError(null)

//       try {
//         const response = await fetch(url, body)
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`)
//         }
//         const result = await response.json()
//         setData(result)
//       } catch (err) {
//         setError((err as Error).message)
//       } finally {
//         setIsFetching(false)
//       }
//     }

//     fetchData()
//   }, [url, body])

//   return { data, isFetching, error }
// }

// export default useQuery
