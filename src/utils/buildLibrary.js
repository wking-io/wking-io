import getChapters from './getChapters';

const buildLibrary = (knowledge) => {
  const getChaptersFromKnowledge = getChapters(knowledge);
  const library = {};
  knowledge
    .map(k => k.book)
    .filter((k, index, input) => input.indexOf(k) === index)
    .forEach((k) => {
      library[k] = getChaptersFromKnowledge(k);
    });

  return library;
};

export default buildLibrary;
