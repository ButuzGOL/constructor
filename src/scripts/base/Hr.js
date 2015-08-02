import React from 'react';

import variables from '../styles/variables';

export default class Hr extends React.Component {

  getStyles() {
    return {
      boxSizing: 'content-box',
      height: 0,
      margin: `${variables.baseHrMarginVertical}px 0`,
      border: 0,
      borderTop: `${variables.baseHrBorderWidth}px solid ${variables.baseHrBorder}`
    };
  }

  render() {
    return (
      <hr style={this.getStyles()} />
    );
  }
}
