import React from 'react';
import { RouteHandler } from 'react-router';

import SubNavigation from '../../components/sub-navigation';

export default class PiecesMaster extends React.Component {
  render() {
    return (
      <div className="tm-middle">
        <div className="uk-container uk-container-center">
          <div className="uk-grid" data-uk-grid-margin="">
            <div className="tm-sidebar uk-width-medium-1-4 uk-hidden-small">
              <SubNavigation
                items={[{
                  label: 'DEFAULTS',
                  children: [{
                    label: 'Base',
                    href: '/pieces/base'
                  }, {
                    label: 'Badge',
                    href: '/pieces/badge'
                  }, {
                    label: 'List',
                    href: '/pieces/list'
                  }, {
                    label: 'Description List',
                    href: '/pieces/description-list'
                  }, {
                    label: 'Panel',
                    href: '/pieces/panel'
                  }, {
                    label: 'Block',
                    href: '/pieces/block'
                  }]
                }]} />
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
