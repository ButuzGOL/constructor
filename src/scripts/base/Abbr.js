import React from 'react';

export default class Abbr extends React.Component {
  static propTypes = {
    title: React.PropTypes.string
  };

  getStyles() {
    return {
      borderBottom: '1px dotted'
    };
  }

  render() {
    return (
      <abbr
        title={this.props.title}
        style={this.getStyles()}>
        {this.props.children}
      </abbr>
    );
  }
}
