import React from 'react';
import { RouteHandler } from 'react-router';

export default class Master extends React.Component {
  render() {
    return (
      <div className="tm-background">
        <nav className="tm-navbar uk-navbar uk-navbar-attached">
          <div className="uk-container uk-container-center">
            <a
              className="uk-navbar-brand uk-hidden-small"
              href="/">
              Constructor
            </a>
            <ul className="uk-navbar-nav uk-hidden-small">
              <li><a href="">Get Started</a></li>
              <li><a href="">Pieces</a></li>
              <li><a href="">Components</a></li>
            </ul>
          </div>
        </nav>

        <RouteHandler {...this.props} />

        <div className="tm-footer">
          <div className="uk-container uk-container-center uk-text-center">
            <ul className="uk-subnav uk-subnav-line uk-flex-center">
              <li><a href="https://github.com/ButuzGOL/constructor">GitHub</a></li>
              <li><a href="https://github.com/ButuzGOL/constructor/issues">Issues</a></li>
              <li><a href="https://github.com/ButuzGOL/constructor/blob/master/CHANGELOG.md">Changelog</a></li>
            </ul>
            <div className="uk-panel">
              <p>In process with <a href="https://butuzgol.github.io">ButuzGOL</a>.<br className="uk-hidden-small" />Licensed under <a href="http://opensource.org/licenses/MIT">MIT license</a>.</p>
            </div>
          </div>

          <p style={{
            fontSize: 88,
            fontWeight: 900,
            textAlign: 'center',
            marginTop: 40
          }}>
            Co
          </p>
        </div>
      </div>
    );
  }
}
