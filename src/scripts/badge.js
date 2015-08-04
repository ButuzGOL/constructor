import React from 'react';
import Radium from 'radium';

import variables from './styles/variables';

import { Span } from '../index';

@Radium
export default class Badge extends React.Component {
  static propTypes = {
    type: React.PropTypes.oneOf(['success', 'warning', 'danger']),
    notification: React.PropTypes.bool
  };

  static defaultProps = {
    notification: false
  };

  getStyles() {
    return {
      base: {
        display: 'inline-block',
        padding: `0 ${variables.badgePaddingHorizontal}px`,
        background: variables.badgeBackground,
        fontSize: variables.badgeFontSize,
        fontWeight: variables.badgeFontWeight,
        lineHeight: `${variables.badgeLineHeight}px`,
        color: variables.badgeColor,
        textAlign: 'center',
        verticalAlign: 'middle',
        textTransform: variables.badgeTextTransform,
        ':hover': {
          color: variables.badgeHoverColor
        }
      },
      notification: {
        boxSizing: 'border-box',
        minWidth: variables.badgeNotificationLineHeight,
        borderRadius: 500,
        fontSize: variables.badgeNotificationFontSize,
        lineHeight: variables.badgeNotificationLineHeight
      },
      types: {
        success: { background: variables.badgeSuccessBackground },
        warning: { background: variables.badgeWarningBackground },
        danger: { background: variables.badgeDangerBackground }
      }
    };
  }

  render() {
    const styles = this.getStyles();
    const props = this.props;

    return (
      <Span style={[
        styles.base,
        props.notification && styles.notification,
        props.type && styles.types[props.type]
      ]}>
        {props.children}
      </Span>
    );
  }
}
