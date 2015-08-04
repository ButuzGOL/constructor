import React from 'react';
import { Route } from 'react-router';

import Master from './pages/master';
import Home from './pages/home';

import PiecesMaster from './pages/pieces/master';
import BasePage from './pages/pieces/base';
import BadgePage from './pages/pieces/badge';

export default (
  <Route path="/" handler={Master}>
    <Route path="/" handler={Home} />
    <Route path="pieces" handler={PiecesMaster}>
      <Route path="base" handler={BasePage} />
      <Route path="badge" handler={BadgePage} />
    </Route>
  </Route>
);
