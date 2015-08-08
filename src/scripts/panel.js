import React from 'react';
import Radium from 'radium';

import variables from './styles/variables';

import Div from './base/div';
import { H3 } from './base/hn';

@Radium
export default class Panel extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    badge: React.PropTypes.element,
    type: React.PropTypes.oneOf(['default', 'primary', 'secondary']),
    box: React.PropTypes.bool,
    hover: React.PropTypes.bool,
    header: React.PropTypes.bool,
    space: React.PropTypes.bool,
    divider: React.PropTypes.bool
  };

  static defaultProps = {
    type: 'default',
    box: false,
    hover: false,
    header: false,
    space: false,
    divider: false
  };

  getStyles() {
    return {
      base: {
        display: 'block',
        position: 'relative',
        ':hover': {
          textDecoration: 'none'
        }
      },
      title: {
        marginTop: 0,
        marginBottom: variables.panelTitleMarginBottom,
        fontSize: variables.panelTitleFontSize,
        lineHeight: variables.panelTitleLineHeight,
        fontWeight: variables.panelTitleFontWeight,
        textTransform: variables.panelTitleTextTransform,
        color: variables.panelTitleColor
      },
      badge: {
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 1
      },
      teaser: {},
      box: {
        base: {
          padding: variables.panelBoxPadding,
          background: variables.panelBoxBackground,
          color: variables.panelBoxColor,
          ':hover': {
            color: variables.panelBoxHoverColor
          }
        },
        title: {
          color: variables.panelBoxTitleColor
        },
        badge: {
          top: variables.panelBoxBadgeTop,
          right: variables.panelBoxBadgeRight
        },
        teaser: {}
      },
      hover: {
        base: {
          padding: variables.panelHoverPadding,
          color: variables.panelHoverColor,
          ':hover': {
            background: variables.panelHoverHoverBackground,
            color: variables.panelHoverHoverColor
          }
        },
        badge: {
          top: variables.panelHoverBadgeTop,
          right: variables.panelHoverBadgeRight
        },
        teaser: {}
      },
      space: {
        base: {
          padding: variables.panelSpacePadding
        },
        badge: {
          top: variables.panelSpacePadding,
          right: variables.panelSpacePadding
        }
      },
      header: {
        title: {
          paddingBottom: variables.panelHeaderTitlePadding,
          borderBottom: `${variables.panelHeaderTitleBorderWidth}px solid
            ${variables.panelHeaderTitleBorder}`,
          color: variables.panelHeaderTitleColor
        }
      },
      types: {
        default: {},
        primary: {
          base: {
            backgroundColor: variables.panelBoxPrimaryBackground,
            color: variables.panelBoxPrimaryColor,
            ':hover': {
              color: variables.panelBoxPrimaryHoverColor
            }
          },
          title: {
            color: variables.panelBoxPrimaryTitleColor
          }
        },
        secondary: {
          base: {
            backgroundColor: variables.panelBoxSecondaryBackground,
            color: variables.panelBoxSecondaryColor,
            ':hover': {
              color: variables.panelBoxSecondaryHoverColor
            }
          },
          title: {
            color: variables.panelBoxSecondaryTitleColor
          }
        }
      }
    };
  }

  render() {
    const props = this.props;
    const styles = this.getStyles();

    return (
      <Div style={[
        styles.base,
        props.box && styles.box.base,
        props.hover && styles.hover.base,
        props.space && styles.space.base,
        props.divider && styles.divider,
        styles.types[props.type].base,
        props.style
      ]}>
        {props.badge ? (
          <Div style={[
            styles.badge,
            props.box && styles.box.badge,
            props.hover && styles.hover.badge,
            props.space && styles.space.badge
          ]}>
            {props.badge}
          </Div>) : null}
        <H3 style={[
          styles.title,
          props.box && styles.box.title,
          props.header && styles.header.title,
          styles.types[props.type].title
        ]}>{props.title}</H3>
        <Div>
          {props.children}
        </Div>
      </Div>
    );
  }
}
