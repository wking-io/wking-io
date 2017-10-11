import React from 'react';
import PropTypes from 'prop-types';

export default class Gist extends React.Component {

  shouldComponentUpdate(nextProps) {
      return this.props.id !== nextProps.id;
  }
  componentDidMount() {
      this._updateIframeContent();
  }

  componentDidUpdate(prevProps, prevState) {
      this._updateIframeContent();
  }

  _calculateUrl = () => `https://gist.github.com/${this.props.id}.js`;

  _updateIframeContent = () => {
      var iframe = this.refs.iframe;

      var doc = iframe.document;
      if (iframe.contentDocument) doc = iframe.contentDocument;
      else if (iframe.contentWindow) doc = iframe.contentWindow.document;

      var gistLink = this._calculateUrl()
      var gistScript = '<script type="text/javascript" src="' + gistLink + '"></script>';
      var styles = '<style>*{font-size:12px;}</style>';
      var resizeScript = 'onload="parent.document.getElementById(\'gist-' + this.props.id + '\').style.height=document.body.scrollHeight + \'px\'"';
      var iframeHtml = '<html><head><base target="_parent">'+styles+'</head><body '+resizeScript+'>'+gistScript+'</body></html>';

      doc.open();
      doc.writeln(iframeHtml);
      doc.close();
  };

  render() {
    return (
      <iframe ref='iframe' width='100%' frameBorder="0" id={`gist-${this.props.id}`} />
    );
  };
}
