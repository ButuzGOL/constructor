import React from 'react';

import variables from '../styles/variables';

export default class Em extends React.Component {

  getStyles() {
    return {
      color: variables.baseEmColor
    };
  }

  render() {
    return (
      <em style={this.getStyles()}>
        {this.props.children}
      </em>
    );
  }
}
