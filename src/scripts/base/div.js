import React from 'react';
import Radium from 'radium';

@Radium
export default class Div extends React.Component {

  render() {
    return (
      <div style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}
