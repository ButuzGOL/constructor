import React from 'react';
import Radium from 'radium';

import variables from './styles/variables';

import Div from './base/div';

@Radium
export default class Block extends React.Component {
  static propTypes = {
    type: React.PropTypes.oneOf(['default', 'muted', 'primary', 'secondary']),
    large: React.PropTypes.bool
  };

  static defaultProps = {
    type: 'default',
    large: false
  };

  getStyles() {
    return {
      base: {
        position: 'relative',
        boxSizing: 'border-box',
        paddingTop: variables.blockPaddingVerticalLarge,
        paddingBottom: variables.blockPaddingVerticalLarge
      },
      large: {
        paddingTop: variables.blockLargePaddingVerticalLarge,
        paddingBottom: variables.blockLargePaddingVerticalLarge
      },
      types: {
        default: { background: variables.blockDefaultBackground },
        muted: { background: variables.blockMutedBackground },
        primary: { background: variables.blockPrimaryBackground },
        secondary: { background: variables.blockSecondaryBackground }
      }
    };
  }

  render() {
    const styles = this.getStyles();
    const props = this.props;

    return (
      <Div style={[
        styles.base,
        props.large && styles.large,
        styles.types[props.type]
      ]}>
        {props.children}
      </Div>
    );
  }
}
