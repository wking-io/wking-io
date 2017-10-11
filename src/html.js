import React from 'react';

import faviconTouch from './img/favicons/apple-touch-icon.png';
import favicon32 from './img/favicons/favicon-32x32.png';
import favicon16 from './img/favicons/favicon-16x16.png';
import manifest from './img/favicons/manifest.json';
import faviconPinned from './img/favicons/safari-pinned-tab.svg';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
  } catch (e) {
    console.log(e);
  }
}

export default class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }

    return (
      <html lang="en">
        <head>
          <link rel="apple-touch-icon" sizes="180x180" href={faviconTouch} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="manifest" href={manifest} />
          <link rel="mask-icon" href={faviconPinned} color="#e33532" />
          <meta name="theme-color" content="#ffffff" />

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script src='/static/prism.js'></script>
          {this.props.headComponents}
          <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:400,500,700" rel="stylesheet" />
          {this.props.styles}
          {css}
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
