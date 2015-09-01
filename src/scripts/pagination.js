import React from 'react';
import Radium from 'radium';
import range from 'lodash.range';

import variables from './styles/variables';

import A from './base/a';
import Span from './base/span';

@Radium
export default class Pagination extends React.Component {
  static propTypes = {
    count: React.PropTypes.number.isRequired,
    current: React.PropTypes.number.isRequired,
    adjacents: React.PropTypes.number
  };

  static defaultProps = {
    adjacents: 6
  };

  getStyles() {
    // TODO: use item link text instead of a li span
    return {
      base: {
        padding: 0,
        listStyle: 'none',
        textAlign: 'center',
        fontSize: '0.001px'
      },
      li: {
        base: {
          display: 'inline-block',
          fontSize: variables.paginationFontSize,
          verticalAlign: 'top',
          marginLeft: variables.paginationMarginLeft
        },
        first: {
          marginLeft: 0
        }
      },
      a: {
        display: 'inline-block',
        // minWidth: @pagination-line-height + (2 * @pagination-padding-vertical) - (2 * @pagination-padding-horizontal);
        minWidth: '16px',
        padding: `${variables.paginationPaddingVertical} ${variables.paginationPaddingHorizontal}`,
        lineHeight: variables.paginationLineHeight,
        textDecoration: 'none',
        boxSizing: 'content-box',
        textAlign: 'center',

        background: variables.paginationBackground,
        color: variables.paginationColor,
        ':hover': {
          background: variables.paginationHoverBackground,
          color: variables.paginationHoverColor,
          outline: 'none',
          textDecoration: 'none'
        },
        ':focus': {
          background: variables.paginationHoverBackground,
          color: variables.paginationHoverColor,
          outline: 'none'
        },
        ':active': {
          background: variables.paginationOnclickBackground,
          color: variables.paginationOnclickColor
        }
      },
      span: {
        display: 'inline-block',
        // minWidth: @pagination-line-height + (2 * @pagination-padding-vertical) - (2 * @pagination-padding-horizontal);
        minWidth: '16px',
        padding: `${variables.paginationPaddingVertical} ${variables.paginationPaddingHorizontal}`,
        lineHeight: variables.paginationLineHeight,
        textDecoration: 'none',
        boxSizing: 'content-box',
        textAlign: 'center'
      },
      active: {
        background: variables.paginationActiveBackground,
        color: variables.paginationActiveColor
      },
      disabled: {
        backgroundColor: variables.paginationDisabledBackground,
        color: variables.paginationDisabledColor
      }
    };
  }

  render() {
    const props = this.props;
    const styles = this.getStyles();

    const adjacents = Math.floor(props.adjacents / 2) * 2 + 1;
    const leftOffset = Math.max(0, Math.min(props.count - adjacents, props.current - Math.ceil(adjacents / 2)));

    const displayRangePages = range(1, props.count + 1).slice(leftOffset, leftOffset + adjacents);

    let items = [];

    if (displayRangePages[0] !== 1) {
      items.push(
        <li style={[
          styles.li.base,
          styles.li.first
        ]}>
          <A
            style={styles.a}
            href="#">
            1
          </A>
        </li>
      );
      if (displayRangePages[0] !== 2) {
        items.push(
          <li style={styles.li.base}>
            <Span style={styles.span}>
              ...
            </Span>
          </li>
        );
      }
    }

    items = items.concat(displayRangePages.map((item) => {
      return (
        <li style={styles.li.base}>
          {(item === props.current) ? (
            <Span style={[
              styles.span,
              styles.active
            ]}>{item}</Span>
          ) : (
            <A
              style={styles.a}
              href="#">
              {item}
            </A>
          )}
        </li>
      );
    }));

    const lastPage = displayRangePages[displayRangePages.length - 1];
    if (lastPage !== props.count) {
      if (lastPage !== props.count - 1) {
        items.push(
          <li style={styles.li.base}>
            <Span style={styles.span}>
              ...
            </Span>
          </li>
        );
      }
      items.push(
        <li style={styles.li.base}>
          <A
            style={styles.a}
            href="#">
            {props.count}
          </A>
        </li>
      );
    }

    return (
      <ul style={styles.base}>
        {items}
      </ul>
    );
  }
}
