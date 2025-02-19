import cx from 'classnames'
import React, { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

import useQuery from '../../../hooks/useQuery'
import EmptyBookContainer from '../EmptyBookContainer/EmptyBookContainer'
import BookItem from '../BookItem/BookItem'

import s from './BookContainer.module.css'

type Book = {
  id: number;
  title: string;
  author: string;
};

type BookContainerProps = {
  route: string
  className?: string
  status: string
  viewedBooks?: number
  hasShowAll?: boolean
  hasStyle?: boolean
}

const BookContainer: React.FC<BookContainerProps> = (props) => {
  const { route,
          className,
          status,
          viewedBooks = 0,
          hasShowAll = true,
          hasStyle = true} = props

  const { customFetch, data, error, isFetching } = useQuery<{ results: Book[] }>({
    url: `http://127.0.0.1:8000/api/books/?status=${status}`,
    method: 'GET',
  });

  const books = useMemo(() => (data?.results ? data.results : []), [data]);

  useEffect(() => {
    customFetch();
  }, [customFetch]);

if (isFetching) return <p>Загрузка...</p>;

if (error) {
  return (
    <div className={s.error}>
      <p>Произошла ошибка при загрузке данных.</p>
      <p>Подробности: {error}</p>
    </div>
  );
}

  return (
    <div className={cx(className, s.sectionTitle)}>
        { (books.length > viewedBooks) && hasShowAll &&
            <div className={cx(className, s.allLink)}>
                <Link to={route}>
                    <div className={s.label}>Все</div>
                </Link>
            </div>}
        <div className={s.bookContainerWrapper}>
            {books.length > 0 ? (
                books.slice(-viewedBooks).reverse().map((book) => (
                    <BookItem key={book.id} bookName={book.title} authorName={book.author} />
                ))
            ) : (
                <EmptyBookContainer className={cx(className, hasStyle ? className : s.emptyStyle)}/>
            )}
        </div>
    </div>
  );
};

export default BookContainer
