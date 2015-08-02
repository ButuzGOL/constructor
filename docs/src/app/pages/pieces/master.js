import React from 'react';
import { RouteHandler, Link } from 'react-router';

export default class PiecesMaster extends React.Component {
  static contextTypes = {
    router: React.PropTypes.func
  };

  render() {
    const router = this.context.router;

    return (
      <div className="tm-middle">
        <div className="uk-container uk-container-center">
          <div className="uk-grid" data-uk-grid-margin="">
            <div className="tm-sidebar uk-width-medium-1-4 uk-hidden-small">
              <ul className="tm-nav uk-nav" data-uk-nav="">
                <li className="uk-nav-header">Defaults</li>
                <li className={router.isActive('/pieces/base') ? 'uk-active' : ''}>
                  <Link to="/pieces/base">Base</Link>
                </li>
                <li><a href="">Print</a></li>
              </ul>
            </div>
            <div className="tm-main uk-width-medium-3-4">
              <RouteHandler {...this.props} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
