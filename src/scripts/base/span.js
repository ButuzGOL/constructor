import React from 'react';
import Radium from 'radium';

@Radium
export default class Span extends React.Component {

  render() {
    return (
      <span style={this.props.style}>
        {this.props.children}
      </span>
    );
  }
}
