import React from 'react';

import variables from '../styles/variables';

export default class Ins extends React.Component {

  getStyles() {
    return {
      background: variables.baseInsBackground,
      color: variables.baseInsColor,
      textDecoration: 'none'
    };
  }

  render() {
    return (
      <ins style={this.getStyles()}>
        {this.props.children}
      </ins>
    );
  }
}
