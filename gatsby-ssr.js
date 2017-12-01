const React = require('react');

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement('link', {
      href: 'https://fonts.googleapis.com/css?family=Open+Sans|Playfair+Display',
      rel: 'stylesheet',
      key: 'googleFonts',
    }),
  ]);
};
