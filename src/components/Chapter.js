import React from 'react';
import PropType from 'prop-types';

import ChapterTitle from './ChapterTitle';
import CodeBlock from './CodeBlock';

const Chapter = ({ book, chapter, content }) => (
  <div>
    <ChapterTitle>{chapter}</ChapterTitle>
    <CodeBlock type={book} code={content} />
  </div>
);

Chapter.propTypes = {
  book: PropType.string,
  chapter: PropType.string,
  content: PropType.string,
};

export default Chapter;
