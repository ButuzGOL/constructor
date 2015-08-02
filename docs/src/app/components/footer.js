import React from 'react';

export default class Navigation extends React.Component {
  render() {
    return (
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
    );
  }
}
