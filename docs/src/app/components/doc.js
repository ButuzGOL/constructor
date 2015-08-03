import React from 'react';

import { P, H2, H3, A, Hr } from 'constructor';

export default class Doc extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    desc: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.string
    ])
  };

  getStyles() {
    return {
      linkReset: {
        color: 'inherit',
        textDecoration: 'none'
      },
      subTitle: {
        paddingLeft: 6,
        borderLeft: '3px solid #1FA2D6',
        fontSize: 16,
        lineHeight: '16px'
      },
      articleDivider: {
        marginBottom: 25,
        borderColor: '#e5e5e5'
      }
    };
  }

  render() {
    const props = this.props;
    const styles = this.getStyles();

    return (
      <div>
        <H2>
          <A style={styles.linkReset}>{props.name}</A>
        </H2>

        {(typeof props.desc === 'string') ? (<P>props.desc</P>) : props.desc}

        {props.children ? (
          <div>
            <H3 style={styles.subTitle}>Example</H3>
            {props.children}
          </div>
        ) : null}

        <Hr style={styles.articleDivider} />
      </div>
    );
  }
}
