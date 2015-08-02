import React from 'react';
import { Link } from 'react-router';

export default class Navigation extends React.Component {
  static contextTypes = {
    router: React.PropTypes.func
  };

  render() {
    const router = this.context.router;

    return (
      <nav className="tm-navbar uk-navbar uk-navbar-attached">
        <div className="uk-container uk-container-center">
          <Link
            className="uk-navbar-brand uk-hidden-small"
            to="/">Constructor</Link>
          <ul className="uk-navbar-nav uk-hidden-small">
            <li><a href="">Get Started</a></li>
            <li className={router.getCurrentPath().indexOf('pieces') !== -1 ? 'uk-active' : ''}>
              <Link to="/pieces/base">Pieces</Link>
            </li>
            <li><a href="">Components</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
