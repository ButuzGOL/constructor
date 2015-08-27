import React from 'react';
import Radium from 'radium';

import variables from '../styles/variables';

@Radium
export default class A extends React.Component {
  static propTypes = {
    href: React.PropTypes.string,
    onClick: React.PropTypes.func
  };

  getStyles() {
    return {
      background: 'transparent',
      color: variables.baseLinkColor,
      textDecoration: variables.baseLinkTextDecoration,
      cursor: 'pointer',
      ':active': {
        outline: 0
      },
      ':hover': {
        outline: 0,
        color: variables.baseLinkHoverColor,
        textDecoration: variables.baseLinkHoverTextDecoration
      }
    };
  }

  render() {
    const props = this.props;

    return (
      <a
        style={[
          this.getStyles()
        ].concat(props.style)}
        href={props.href}
        onClick={props.onClick}>
        {props.children}
      </a>
    );
  }
}
