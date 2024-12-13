import useQuery, { Options } from '../useQuery'

type bookData = {
  data: {
    id: number
    bookName: string
    bookAuthor: string
    mainIdea: string
    myAttitude: string
  }
  error?: string
}

const useCreateBook = (bookName: string, bookAuthor: string, mainIdea: string, myAttitude: string) => {
  const queryOptions: Options = {
    url: '/api/books/',
    method: 'POST',
    body: {
        title: bookName,
        author: bookAuthor,
        main_idea: mainIdea,
        user_opinion: myAttitude,
    },
  }

  const { customFetch, data, error } = useQuery<bookData>(queryOptions)

  return {
    createBook: customFetch,
    data: data?.data,
    error,
  }
}

export default useCreateBook
