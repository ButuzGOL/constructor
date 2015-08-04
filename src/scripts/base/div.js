import React from 'react';

export default class Div extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
