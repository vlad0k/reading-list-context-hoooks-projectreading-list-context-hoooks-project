import './App.css';

import React from 'react';

import BookContextProvider from './contexts/BookContext';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>

    </div>
  );
}

export default App;
