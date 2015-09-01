import React from 'react';
import Radium from 'radium';

import variables from './styles/variables';

import A from './base/a';
import Span from './base/span';
import Div from './base/div';

@Radium
export default class Breadcrumb extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired,
    divider: React.PropTypes.string
  };

  static defaultProps = {
    divider: '/'
  };

  getStyles() {
    return {
      base: {
        padding: 0,
        listStyle: 'none',
        fontSize: '0.001px'
      },
      li: {
        fontSize: variables.breadcrumbFontSize,
        verticalAlign: 'top',
        display: 'inline-block'
      },
      a: {
        display: 'inline-block'
      },
      span: {
        display: 'inline-block'
      },
      disabled: {
        color: variables.breadcrumbDisabledColor
      },
      divider: {
        display: 'inline-block',
        margin: `0 ${variables.breadcrumbDividerMargin}`
      }
    };
  }

  render() {
    const props = this.props;
    const styles = this.getStyles();

    return (
      <ul style={styles.base}>
        {props.items.map((item, index) => {
          return (
            <li style={styles.li}>
              {index ? (
                <Div style={styles.divider}>
                  {props.divider}
                </Div>
              ) : null}
              {(item.href && !item.disabled) ? (
                <A
                  style={styles.a}
                  href={item.href}>
                  {item.label}
                </A>
              ) : (
                <Span style={[
                  styles.span,
                  item.disabled && styles.disabled
                ]}>
                  {item.label}
                </Span>
              )}
            </li>
          );
        })}
      </ul>
    );
  }
}
