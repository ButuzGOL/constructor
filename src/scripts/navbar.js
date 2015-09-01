import React from 'react';
import Radium from 'radium';
import uniqid from 'uniqid';
import groupBy from 'lodash.groupby';

import variables from './styles/variables';

import Div from './base/div';
import A from './base/a';
import Nav from './nav';

@Radium
export default class NavBar extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired,
    brand: React.PropTypes.shape({
      label: React.PropTypes.string,
      href: React.PropTypes.string
    })
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
      wrapper: {
        base: {
          background: variables.navbarBackground,
          color: variables.navbarColor
        },
        after: {
          content: '',
          display: 'table',
          clear: 'both'
        },
        before: {
          content: '',
          display: 'table'
        }
      },
      base: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        float: 'left'
      },
      li: {
        float: 'left',
        position: 'relative'
      },
      a: {
        base: {
          display: 'block',
          boxSizing: 'border-box',
          textDecoration: 'none',
          height: variables.navbarNavHeight,
          padding: `0 ${variables.navbarNavPaddingHorizontal}`,
          lineHeight: variables.navbarNavLineHeight,
          color: variables.navbarNavColor,
          fontSize: variables.navbarNavFontSize,
          fontFamily: variables.navbarNavFontFamily,
          fontWeight: variables.navbarNavFontWeight,
          ':hover': {
            backgroundColor: variables.navbarNavHoverBackground,
            color: variables.navbarNavHoverColor,
            outline: 'none',
            textDecoration: 'none'
          },
          ':focus': {
            backgroundColor: variables.navbarNavHoverBackground,
            color: variables.navbarNavHoverColor,
            outline: 'none'
          },
          ':active': {
            backgroundColor: variables.navbarNavActiveBackground,
            color: variables.navbarNavActiveColor
          }
        },
        active: {
          backgroundColor: variables.navbarNavActiveBackground,
          color: variables.navbarNavActiveColor
        },
        subLabel: {
          base: {
            // lineHeight: variables.navbarNavLineHeight - variables.navbarNavSubtitleFontSize - variables.navbarNavSubtitleOffset
            lineHeight: '28px'
          },
          sub: {
            // marginTop: ((variables.navbarNavLineHeight - variables.navbarNavSubtitleFontSize - variables.navbarNavFontSize) / -2) + variables.navbarNavSubtitleOffset,
            marginTop: '-6px',
            fontSize: variables.navbarNavSubtitleFontSize,
            // lineHeight: variables.navbarNavSubtitleFontSize + variables.navbarNavSubtitleOffset
            lineHeight: '12px'
          }
        }
      },
      brand: {
        before: {
          content: '',
          display: 'inline-block',
          height: '100%',
          verticalAlign: 'middle'
        },
        base: {
          boxSizing: 'border-box',
          display: 'block',
          height: variables.navbarNavHeight,
          padding: `0 ${variables.navbarNavPaddingHorizontal}`,
          float: 'left',

          fontSize: variables.navbarBrandFontSize,
          color: variables.navbarBrandColor,
          textDecoration: 'none',
          ':hover': {
            color: variables.navbarBrandColor,
            textDecoration: 'none'
          }
        }
      },
      positions: {
        right: {
          float: 'right'
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

  renderItems(items) {
    const styles = this.getStyles();

    return (
      <ul style={styles.base}>
        {items.map((item) => {
          return (
            <li
              onMouseEnter={this.handleToggle.bind(this, item.id)}
              onMouseLeave={this.handleToggle.bind(this, item.id)}
              style={styles.li}>
              <A
                style={[
                  styles.a.base,
                  item.subLabel && styles.a.subLabel.base,
                  (item.active || this.state.opened === item.id) && styles.a.active
                ]}
                href="#">
                {item.label}
                {item.subLabel ? (
                  <Div style={styles.a.subLabel.sub}>
                    {item.subLabel}
                  </Div>
                ) : null}
              </A>
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
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    const styles = this.getStyles();
    const props = this.props;

    const groupedItems = groupBy(props.items, 'position');

    return (
      <Div style={styles.wrapper.base}>
        <Div style={styles.wrapper.before} />
        {props.brand ? (
          <A
            style={styles.brand.base}
            href={props.brand.href}>
            <Div style={styles.brand.before} />
            {props.brand.label}
          </A>
        ) : null}
        {this.renderItems(groupedItems.undefined)}
        {groupedItems.right.length ? (
          <Div style={styles.positions.right}>
            {this.renderItems(groupedItems.right)}
          </Div>
        ) : null}
        <Div style={styles.wrapper.after} />
      </Div>
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
