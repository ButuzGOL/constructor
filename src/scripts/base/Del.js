import React from 'react';

export default class Del extends React.Component {

  render() {
    return (
      <del>
        {this.props.children}
      </del>
    );
  }
}
