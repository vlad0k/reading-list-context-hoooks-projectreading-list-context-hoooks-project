import { v1 as uuid } from 'uuid';
import React, { createContext, useReducer } from 'react';

import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {

  const [books, dispatch] = useReducer( bookReducer, [
    {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
    {title: 'the final empire', author: 'brandon sanderson', id: 2}
  ]);

  const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid()}]);
  }

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  }

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      { props.children }
    </BookContext.Provider>
  )
}

export default BookContextProvider;
