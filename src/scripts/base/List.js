import React from 'react';
import Radium from 'radium';

import variables from '../styles/variables';

@Radium
export default class List extends React.Component {
  static propTypes = {
    type: React.PropTypes.oneOf(['unordered', 'ordered', 'description']),
    items: React.PropTypes.array.isRequired
  };

  static defaultProps = {
    type: 'unordered'
  };

  getStyles() {
    return {
      base: {
        margin: `0 0 ${variables.baseMarginVertical}px 0`
      },
      ulOl: {
        paddingLeft: variables.baseListPaddingLeft
      },
      sub: {
        margin: 0
      },
      dt: {
        fontWeight: 'bold'
      },
      dd: {
        marginLeft: 0
      }
    };
  }

  render() {
    const styles = this.getStyles();
    const props = this.props;
    const attrs = {
      tagName: (props.type === 'unordered') ? 'ul' : 'ol'
    };

    if (props.type === 'description') {
      return (
        <dl style={styles.base}>
          {props.items.map((item) => {
            return (
              <span>
                <dt style={styles.dt}>{item.label}</dt>
                <dd style={styles.dd}>{item.data}</dd>
              </span>
            );
          })}
        </dl>
      );
    }

    return (
      <attrs.tagName style={[
        styles.base,
        styles.ulOl,
        props.style
      ]}>
        {props.items.map((item) => {
          return (
            <li>
              {item.label}
              {(item.children && item.children.length) ? (
                <List
                  type={props.type}
                  style={styles.sub}
                  items={item.children} />) : null
              }
            </li>
          );
        })}
      </attrs.tagName>
    );
  }
}
