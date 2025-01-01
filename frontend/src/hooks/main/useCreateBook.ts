import useQuery, { Options } from '../useQuery'

type bookData = {
  data: {
    id: number
    bookName: string
    bookAuthor: string
    mainIdea: string
    myAttitude: string
    selectedItem: string
  }
  error?: string
}

const useCreateBook = (bookName: string, bookAuthor: string, mainIdea: string, myAttitude: string, selectedItem: string) => {
  switch (selectedItem) {
    case "Прочитанное": {
      selectedItem = "finished";
      break;
    }
    case "Хочу прочитать": {
      selectedItem = "planning";
      break;
    }
    case "Читаю сейчас": {
      selectedItem = "reading";
      break;
    }
  }
  
  const queryOptions: Options = {
    url: '/api/books/',
    method: 'POST',
    body: {
        title: bookName,
        author: bookAuthor,
        main_idea: mainIdea,
        user_opinion: myAttitude,
        status: selectedItem,
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
