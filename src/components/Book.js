import React from 'react';
import PropType from 'prop-types';

import BookTitle from './BookTitle';
import Gist from './Gist';

const Book = ({ title, chapters }) => (
  <section>
    <BookTitle>{title}</BookTitle>
    {chapters.map(chapter => (
      <div>
        <h2>{chapter.title}</h2>
        <Gist id={chapter.gist} />
      </div>
    ))}
  </section>
);

Book.propTypes = {
  chapters: PropType.arrayOf(PropType.object),
  title: PropType.string,
};

export default Book;
