import React from 'react';

import variables from '../styles/variables';

export default class Q extends React.Component {

  getStyles() {
    return {
      fontStyle: variables.baseQuoteFontStyle
    };
  }

  render() {
    return (
      <q>
        {this.props.children}
      </q>
    );
  }
}
