import React from 'react';

export default class Small extends React.Component {
  getStyles() {
    return {
      fontSize: '80%'
    };
  }

  render() {
    return (
      <small style={this.getStyles()}>
        {this.props.children}
      </small>
    );
  }
}
