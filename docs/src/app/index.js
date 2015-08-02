require('./assets/styles/main.less');

import React from 'react';
import Router from 'react-router';

import routes from './routes';

window.React = React;

Router.run(routes, (Handler) => {
  React.render(<Handler />, document.body);
});
