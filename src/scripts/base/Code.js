import React from 'react';

import variables from '../styles/variables';

export default class Code extends React.Component {

  getStyles() {
    return {
      fontSize: variables.baseCodeFontSize,
      fontFamily: variables.baseCodeFontFamily,
      color: variables.baseCodeColor,
      whiteSpace: 'nowrap'
    };
  }

  render() {
    return (
      <code style={this.getStyles()}>
        {this.props.children}
      </code>
    );
  }
}
