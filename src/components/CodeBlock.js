import React from 'react';
import PropType from 'prop-types';

const CodeBlock = ({ type, code }) => (
  <div>
    <span>{type}</span>
    <pre className={`language-${type}`} >
      <code>{code}</code>
    </pre>
  </div>
);

CodeBlock.propTypes = {
  type: PropType.string,
  code: PropType.string,
};

export default CodeBlock;
