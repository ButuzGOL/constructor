import React from 'react';

import variables from '../styles/variables';

export default class P extends React.Component {

  getStyles() {
    return {
      margin: `0 0 ${variables.baseMarginVertical} 0`,
      marginTop: variables.baseMarginVertical
    };
  }

  render() {
    return (
      <p style={this.getStyles()}>
        {this.props.children}
      </p>
    );
  }
}
