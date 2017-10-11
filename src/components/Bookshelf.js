import React from 'react';

import Book from './Book';

const Bookshelf = ({ books }) => (
  <div>
    {books.map(book => <Book title={book.title} chapters={book.chapters} />)}
  </div>
);

export default Bookshelf;
