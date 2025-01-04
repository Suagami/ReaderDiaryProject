import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetBooks = (status: string) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('/api/books/', { params: { status } });
        setBooks(response.data);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          console.error('Неизвестная ошибка', err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, [status]);

  return { books, isLoading, error };
};

export default useGetBooks
