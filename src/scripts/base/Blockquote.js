import React from 'react';

import variables from '../styles/variables';

export default class Blockquote extends React.Component {

  getStyles() {
    return {
      margin: `0 0 ${variables.baseMarginVertical} 0`,
      marginTop: variables.baseMarginVertical,
      paddingLeft: variables.baseBlockquotePaddingLeft,
      borderLeft: `${variables.baseBlockquoteBorderWidth}px
        solid ${variables.baseBlockquoteBorder}`,
      fontSize: variables.baseBlockquoteFontSize,
      lineHeight: `${variables.baseBlockquoteLineHeight}px`,
      fontStyle: variables.baseBlockquoteFontStyle
    };
  }

  render() {
    return (
      <blockquote style={this.getStyles()}>
        {this.props.children}
      </blockquote>
    );
  }
}
