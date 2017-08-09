import React from 'react';
import PropType from 'prop-types';
import Lowlight from 'react-lowlight';
import js from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';
import scss from 'highlight.js/lib/languages/scss';

Lowlight.registerLanguage('javascript', js);
Lowlight.registerLanguage('php', php);
Lowlight.registerLanguage('scss', scss);

const CodeBlock = ({ type, code }) => (
  <div>
    <span>{type}</span>
    <Lowlight language={type} value={code} />
  </div>
);

CodeBlock.propTypes = {
  type: PropType.string,
  code: PropType.string,
};

export default CodeBlock;
