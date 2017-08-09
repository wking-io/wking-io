const knowledgeBase = [
  {
    _id: '1',
    book: 'scss',
    chapter: 'How do I make a magical underline that works on line breaks and can be any color I want?',
    content: `
.underline--magical {
  background-image: linear-gradient;
  background-repeat: none;
  background-size: 100% 4px // how-thick;
  background-position: 0 8px // how-far-down;
}
    `,
  },
  {
    _id: '2',
    book: 'javascript',
    chapter: 'How do I get all the siblings of an element?',
    content: `
const getSibs = (el) => Array
  .from(el.parentNode.childNodes);
  .filter(child => child.nodeType == 1 && child != el);
}
    `,
  },
  {
    _id: '3',
    book: 'scss',
    chapter: 'How do I make a magical underline that works on line breaks and can be any color I want?',
    content: `
.underline--magical {
  background-image: linear-gradient;
  background-repeat: none;
  background-size: 100% 4px // how-thick;
  background-position: 0 8px // how-far-down;
}
    `,
  },
  {
    _id: '4',
    book: 'javascript',
    chapter: 'How can I transform siblings of an element?',
    content: `
const transformSibs = (el, callback) => Array
  .from(el.parentNode.childNodes)
  .filter(child => child.nodeType == 1 && child != el)
  .forEach(sibling => {
    callback(sibling);
    return sibling;
  });
    `,
  },
  {
    _id: '5',
    book: 'javascript',
    chapter: 'How can I pass arguments to a callback function?',
    content: `
import transformSibs from 'transformSibs';

// Use a curried function to pass more arguments to callback 
const removeClass = className => el => el.classList.remove(className);
const $item = document.querySelector('.item');
transformSibs($item, removeClass('active'));
    `,
  },
];

export default knowledgeBase;
