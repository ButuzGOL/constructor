import React from 'react';
import { Route } from 'react-router';

import Master from './pages/master';
import Home from './pages/home';

import PiecesMaster from './pages/pieces/master';
import ButtonsPage from './pages/pieces/buttons';
import BasePage from './pages/pieces/base';

export default (
  <Route path="/" handler={Master}>
    <Route path="/" handler={Home} />
    <Route path="pieces" handler={PiecesMaster}>
      <Route path="base" handler={BasePage} />
      <Route path="buttons" handler={ButtonsPage} />
    </Route>
  </Route>
);
