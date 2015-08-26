import React from 'react';
import { Route } from 'react-router';

import Master from './pages/master';
import Home from './pages/home';

import PiecesMaster from './pages/pieces/master';
import BasePage from './pages/pieces/base';
import BadgePage from './pages/pieces/badge';
import ListPage from './pages/pieces/list';
import DescriptionListPage from './pages/pieces/description-list';
import PanelPage from './pages/pieces/panel';
import BlockPage from './pages/pieces/block';
import ArticlePage from './pages/pieces/article';
import CommentPage from './pages/pieces/comment';

export default (
  <Route path="/" handler={Master}>
    <Route path="/" handler={Home} />
    <Route path="pieces" handler={PiecesMaster}>
      <Route path="base" handler={BasePage} />
      <Route path="badge" handler={BadgePage} />
      <Route path="list" handler={ListPage} />
      <Route path="description-list" handler={DescriptionListPage} />
      <Route path="panel" handler={PanelPage} />
      <Route path="block" handler={BlockPage} />
      <Route path="article" handler={ArticlePage} />
      <Route path="comment" handler={CommentPage} />
    </Route>
  </Route>
);
