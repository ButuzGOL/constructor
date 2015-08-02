import React from 'react';

import variables from '../styles/variables';

export default class Mark extends React.Component {

  getStyles() {
    return {
      background: variables.baseMarkBackground,
      color: variables.baseMarkColor
    };
  }

  render() {
    return (
      <mark style={this.getStyles()}>
        {this.props.children}
      </mark>
    );
  }
}
