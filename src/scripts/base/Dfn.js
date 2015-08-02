import React from 'react';

export default class Dfn extends React.Component {
  static propTypes = {
    title: React.PropTypes.string
  };

  render() {
    return (
      <dfn title={this.props.title}>
        {this.props.children}
      </dfn>
    );
  }
}
