import React from 'react';
import PropType from 'prop-types';

import BookTitle from './BookTitle';
import Chapter from './Chapter';

const Book = ({ book, title }) => (
  <section>
    <BookTitle>{title}</BookTitle>
    {book.map(chapter =>
      <Chapter
        key={chapter._id}
        book={chapter.book}
        chapter={chapter.chapter}
        content={chapter.content}
      />)
    }
  </section>
);

Book.propTypes = {
  book: PropType.arrayOf(PropType.object),
  title: PropType.string,
};

export default Book;
