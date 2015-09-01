import React from 'react';
import Radium from 'radium';
import uniqid from 'uniqid';

import variables from './styles/variables';

import A from './base/A';
import Div from './base/Div';
import Nav from './nav';

@Radium
export default class SubNav extends React.Component {
  static propTypes = {
    line: React.PropTypes.bool,
    pill: React.PropTypes.bool
  };

  static defaultProps = {
    line: false,
    pill: false
  };

  state = {
    opened: null
  };

  constructor(props) {
    super(props);

    this.props = this.mapProps(props);
  }

  getStyles() {
    return {
      base: {
        before: {
          content: '',
          display: 'block',
          overflow: 'hidden'
        },
        base: {
          display: 'flex',
          flexWrap: 'wrap',
          marginLeft: `-${variables.subnavMarginHorizontal}`,
          marginTop: `-${variables.subnavMarginVertical}`,
          padding: 0,
          listStyle: 'none'
        },
        after: {
          content: '',
          display: 'block',
          overflow: 'hidden',
          clear: 'both'
        }
      },
      li: {
        flex: 'none',
        paddingLeft: variables.subnavMarginHorizontal,
        marginTop: variables.subnavMarginVertical,
        position: 'relative',
        float: 'left',
        listStyle: 'none'
      },
      a: {
        base: {
          display: 'inline-block',
          color: variables.subnavColor,
          ':hover': {
            color: variables.subnavHoverColor,
            textDecoration: variables.subnavHoverTextDecoration
          },
          ':focus': {
            color: variables.subnavHoverColor,
            textDecoration: variables.subnavHoverTextDecoration
          }
        },
        active: {
          color: variables.subnavActiveColor
        },
        disabled: {
          background: 'none',
          color: variables.subnavDisabledColor,
          textDecoration: 'none',
          cursor: 'text',
          ':hover': {
            background: 'none',
            color: variables.subnavDisabledColor
          }
        }
      },
      line: {
        display: 'inline-block',
        height: variables.subnavLineBorderHeight,
        verticalAlign: 'middle',

        marginRight: variables.subnavMarginHorizontal,
        borderLeft: `${variables.subnavLineBorderWidth} solid ${variables.subnavLineBorder}`
      },
      pill: {
        a: {
          base: {
            padding: `${variables.subnavPillPaddingVertical} ${variables.subnavPillPaddingHorizontal}`,
            ':hover': {
              background: variables.subnavPillHoverBackground,
              color: variables.subnavPillHoverColor,
              textDecoration: 'none',
              outline: 'none'
            },
            ':focus': {
              background: variables.subnavPillHoverBackground,
              color: variables.subnavPillHoverColor,
              textDecoration: 'none',
              outline: 'none'
            }
          },
          active: {
            background: variables.subnavPillActiveBackground,
            color: variables.subnavPillActiveColor,
            ':hover': {
              background: variables.subnavPillActiveBackground,
              color: variables.subnavPillActiveColor
            }
          }
        }
      },
      dropdown: {
        base: {
          display: 'none',
          position: 'absolute',
          top: '100%',
          left: 0,
          zIndex: variables.dropdownZIndex,
          boxSizing: 'border-box',
          width: variables.dropdownWidth,
          padding: variables.dropdownPadding,
          // marginTop: variables.dropdownMarginTop,

          // background: variables.dropdownBackground,
          // color: variables.dropdownColor,
          fontSize: variables.dropdownFontSize,
          verticalAlign: 'top',

          marginTop: variables.dropdownNavbarMargin,
          background: variables.dropdownNavbarBackground,
          color: variables.dropdownNavbarColor
        },
        open: {
          display: 'block',
          animation: `${variables.dropdownAnimation} 0.2s ease-in-out`,
          transformOrigin: '0 0'
        }
      }
    };
  }

  render() {
    const styles = this.getStyles();
    const props = this.props;

    return (
      <ul style={styles.base.base}>
        {props.items.map((item, index) => {
          return (
            <li style={styles.li}>
              {(props.line && index) ? (
                <Div style={styles.line} />
              ) : null}
              <A
                style={[
                  styles.a.base,
                  item.active && styles.a.active,
                  props.pill && styles.pill.a.base,
                  item.active && styles.pill.a.active,
                  item.disabled && styles.a.disabled
                ]}
                onClick={item.children ? this.handleToggle.bind(this, item.id) : null}
                href={item.href}>
                {item.label}

                {item.children ? (
                  <Div style={[
                    styles.dropdown.base,
                    this.state.opened === item.id && styles.dropdown.open
                  ]}>
                    <Nav
                      type="dropdown"
                      items={item.children} />
                  </Div>
                ) : null}
              </A>
            </li>
          );
        })}
      </ul>
    );
  }

  handleToggle(id) {
    let opened = null;

    if (!this.state.opened) {
      opened = id;
    }

    this.setState({
      opened
    });
  }

  mapProps(props) {
    props.items.forEach((item) => item.id = uniqid());

    return props;
  }
}
