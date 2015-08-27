import React from 'react';
import Radium from 'radium';
import uniqid from 'uniqid';

import variables from './styles/variables';

import Div from './base/div';
import A from './base/a';

@Radium
export default class Nav extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired,
    multipleExpanded: React.PropTypes.bool
  };

  static defaultProps = {
    multipleExpanded: true
  };

  state = {
    expanded: []
  };

  constructor(props) {
    super(props);

    this.props = this.mapProps(props);

    this.props.items
      .filter((item) => item.expanded)
      .forEach((item) => this.state.expanded.push(item.id));
  }

  getStyles() {
    return {
      base: {
        margin: 0,
        padding: 0,
        listStyle: 'none'
      },
      a: {
        display: 'block',
        textDecoration: 'none',
        padding: `${variables.navPaddingVertical} ${variables.navPaddingHorizontal}`,
        ':hover': {
          textDecoration: 'none'
        }
      },
      nested: {
        base: {
          listStyle: 'none',
          paddingLeft: variables.navNestedPaddingLeft
        },
        top: {
          padding: `${variables.navSubPaddingVertical} 0 ${variables.navSubPaddingVertical} ${variables.navSubPaddingLeft}`
        },
        a: {
          padding: `${variables.navNestedPaddingVertical} ${variables.navNestedPaddingHorizontal}`
        }
      },
      header: {
        base: {
          padding: `${variables.navHeaderPaddingVertical} ${variables.navHeaderPaddingHorizontal}`,
          textTransform: variables.navHeaderTextTransform,
          fontWeight: variables.navHeaderFontWeight,
          fontSize: variables.navHeaderFontSize
        },
        notFirst: {
          marginTop: variables.navHeaderMarginTop
        }
      },
      divider: {
        margin: `${variables.navDividerMarginVertical} ${variables.navDividerMarginHorizontal}`,
        borderTop: `${variables.navSideDividerBorderWidth} solid ${variables.navSideDividerBorder}`
      },
      subLabel: {
        fontSize: variables.navSubtitleFontSize,
        lineHeight: variables.navSubtitleLineHeight
      },
      side: {
        a: {
          base: {
            color: variables.navSideColor,
            ':hover': {
              background: variables.navSideHoverBackground,
              color: variables.navSideHoverColor,
              outline: 'none'
            }
          },
          active: {
            background: variables.navSideActiveBackground,
            color: variables.navSideActiveColor,
            ':hover': {
              background: variables.navSideActiveBackground,
              color: variables.navSideActiveColor
            }
          }
        },
        nested: {
          a: {
            color: variables.navSideNestedColor,
            ':hover': {
              color: variables.navSideNestedHoverColor
            }
          }
        }
      }
    };
  }

  renderChildren(items, nested) {
    const styles = this.getStyles();

    return (
      <ul style={[
        styles.nested.base,
        !nested && styles.nested.top
      ]}>
        {items.map((item) => {
          return (
            <li>
              <A
                style={[
                  styles.nested.a,
                  styles.side.nested.a
                ]}
                href={item.href}>{item.label}</A>
              {item.children ? this.renderChildren(item.children, true) : null}
            </li>
          );
        })}
      </ul>
    );
  }

  renderItem(item, index) {
    const styles = this.getStyles();

    switch (item.type) {
      case 'header':
        return (
          <li style={[
            styles.header.base,
            index && styles.header.notFirst
          ]}>
            {item.label}
          </li>
        );
      case 'divider':
        return (
          <li style={styles.divider} />
        );
      case 'parent':
      default:
        return (
          <li>
            <A
              style={[
                styles.a,
                styles.side.a.base,
                item.active && styles.side.a.active
              ]}
              onClick={item.type === 'parent' ? this.handleToggle.bind(this, item.id) : null}
              href={item.href}>
                {item.label}
                {item.subLabel ? (
                  <Div style={styles.subLabel}>
                    {item.subLabel}
                  </Div>
                ) : null}
              </A>

              {(item.children && this.state.expanded.indexOf(item.id) !== -1) ? this.renderChildren(item.children) : null}
          </li>
        );
    }
  }

  render() {
    const styles = this.getStyles();
    const props = this.props;

    return (
      <ul style={[
        styles.base,
        props.style
      ]}>
        {props.items.map(::this.renderItem)}
      </ul>
    );
  }

  handleToggle(id) {
    let expanded = this.state.expanded;
    const index = expanded.indexOf(id);

    if (index === -1) {
      if (this.props.multipleExpanded) {
        expanded.push(id);
      } else {
        expanded = [id];
      }
    } else {
      expanded.splice(index, 1);
    }

    this.setState({
      expanded: expanded
    });
  }

  mapProps(props) {
    props.items.forEach((item) => item.id = uniqid());

    return props;
  }
}
