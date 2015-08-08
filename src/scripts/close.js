import React from 'react';
import Radium from 'radium';

import variables from './styles/variables';

@Radium
export default class Close extends React.Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  getStyles() {
    return {
      base: {
        appearance: 'none',
        margin: 0,
        border: 'none',
        overflow: 'visible',
        font: 'inherit',
        color: 'inherit',
        textTransform: 'none',
        padding: 0,
        background: 'transparent',
        display: 'inline-block',
        boxSizing: 'content-box',
        width: variables.closeSize,
        lineHeight: variables.closeSize,
        textAlign: 'center',
        verticalAlign: 'middle',
        opacity: 0.3
      }
    };
  }

  render() {
    return (
      <A href="" />
    );
  }
}
