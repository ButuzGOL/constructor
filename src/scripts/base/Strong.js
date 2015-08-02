import React from 'react';

export default class Strong extends React.Component {

  getStyles() {
    return {
      fontWeight: 'bold'
    };
  }

  render() {
    return (
      <strong style={this.getStyles()}>
        {this.props.children}
      </strong>
    );
  }
}
