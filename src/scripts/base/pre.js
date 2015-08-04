import React from 'react';

import variables from '../styles/variables';

export default class Pre extends React.Component {

  getStyles() {
    return {
      padding: variables.basePrePadding,
      background: variables.basePreBackground,
      font: `${variables.basePreFontSize} e("/") ${variables.basePreLineHeight} ${variables.basePreFontFamily}`,
      color: variables.basePreColor,
      tabSize: 4,
      overflow: 'auto'
    };
  }

  render() {
    return (
      <pre style={this.getStyles()}>
        {this.props.children}
      </pre>
    );
  }
}
