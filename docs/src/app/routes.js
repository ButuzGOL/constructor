import React from 'react';
import { Route } from 'react-router';

import Master from './pages/master';
import Home from './pages/home';

export default (
  <Route path="/" handler={Master}>
    <Route path="/" handler={Home} />
  </Route>
);
