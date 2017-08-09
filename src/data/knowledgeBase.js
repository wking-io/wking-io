const knowledgeBase = [
  {
    _id: '1',
    book: 'scss',
    chapter: 'How do I make a magical underline that works on line breaks and can be any color I want?',
    content: `.underline--magical {
      background-image: linear-gradient;
      background-repeat: none;
      background-size: 100% 4px // how-thick;
      background-position: 0 8px // how-far-down;
    }`,
  },
  {
    _id: '2',
    book: 'javascript',
    chapter: 'How do I get all the siblings of an element?',
    content: `const getSibs = (el) => { 
      const siblings = []; 
      for (let sibling = el.parentNode.firstChild ; sibling; sibling = sibling.nextSibling ) { 
      if ( sibling.nodeType == 1 && sibling != el ) { 
          siblings.push( sibling ); 
        } 
      } 
      return siblings; 
    }`,
  },
  {
    _id: '3',
    book: 'scss',
    chapter: 'How do I make a magical underline that works on line breaks and can be any color I want?',
    content: `.underline--magical {
      background-image: linear-gradient;
      background-repeat: none;
      background-size: 100% 4px // how-thick;
      background-position: 0 8px // how-far-down;
    }`,
  },
  {
    _id: '4',
    book: 'javascript',
    chapter: 'How do I get all the siblings of an element?',
    content: `const transformSibs = (el, callback) => {
      const siblings = [];

      for (let sibling = el.parentNode.firstChild ; sibling; sibling = sibling.nextSibling ) {
        if ( sibling.nodeType == 1 && sibling != el ) {
          callback(sibling);
          siblings.push( sibling );
        }
      }
      return siblings;
    }
     
    // Use a curried function to pass more arguments to callback 
    const removeClass = class => sibling => sibling.classList.remove(class);
    const $item = document.querySelector('.item');
    transformSibs($item, removeClass('active'));
    `,
  },
];

export default knowledgeBase;
