import React from 'react';
import Radium from 'radium';

import variables from './styles/variables';

@Radium
export default class List extends React.Component {
  static propTypes = {
    type: React.PropTypes.oneOf(['unordered', 'ordered']),
    items: React.PropTypes.array.isRequired,
    line: React.PropTypes.bool,
    striped: React.PropTypes.bool,
    space: React.PropTypes.bool
  };

  static defaultProps = {
    type: 'unordered',
    line: false,
    striped: false,
    space: false
  };

  getStyles() {
    return {
      base: {
        margin: `0 0 ${variables.baseMarginVertical}px 0`,
        listStyle: 'none',
        padding: 0
      },
      line: {
        marginTop: variables.listLineMarginTop,
        paddingTop: variables.listLineMarginTop,
        borderTop: `${variables.listLineBorderWidth}px solid ${variables.listLineBorder}`
      },
      striped: {
        padding: `${variables.listStripedPaddingVertical}px ${variables.listStripedPaddingHorizontal}px`
      },
      stripedItem: {
        background: variables.listStripedBackground
      },
      space: {
        marginTop: variables.listSpaceMarginTop
      },
      sub: {
        margin: 0
      }
    };
  }

  render() {
    const styles = this.getStyles();
    const props = this.props;
    const attrs = {
      tagName: (props.type === 'unordered') ? 'ul' : 'ol'
    };

    return (
      <attrs.tagName style={[
        styles.base,
        props.style
      ]}>
        {props.items.map((item, index) => {
          return (
            <li style={[
              index && props.line && styles.line,
              props.striped && styles.striped,
              !(index % 2) && props.striped && styles.stripedItem,
              index && props.space && styles.space
            ]}>
              {item.label}
              {(item.children && item.children.length) ? (
                <List
                  type={props.type}
                  line={props.line}
                  striped={props.striped}
                  space={props.space}
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
