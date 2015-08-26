import React from 'react';
import Radium from 'radium';
import moment from 'moment';

import variables from './styles/variables';

import Div from './base/div';
import Img from './base/img';
import { H4 } from './base/hn';

@Radium
export default class Comment extends React.Component {
  static propTypes = {
    avatar: React.PropTypes.string.isRequired,
    date: React.PropTypes.instanceOf(Date).isRequired,
    userName: React.PropTypes.string.isRequired,
    primary: React.PropTypes.bool
  };

  static defaultProps = {
    primary: false
  };

  getStyles() {
    return {
      header: {
        before: {
          content: '',
          display: 'table'
        },
        base: {
          marginBottom: variables.commentHeaderMarginBottom
        },
        after: {
          content: '',
          display: 'table',
          clear: 'both'
        }
      },
      avatar: {
        marginRight: variables.commentAvatarMarginRight,
        float: 'left'
      },
      title: {
        margin: `${variables.commentTitleMarginTop} 0 0 0`,
        fontSize: variables.commentTitleFontSize,
        lineHeight: variables.commentTitleLineHeight
      },
      meta: {
        margin: `${variables.commentMetaMarginTop} 0 0 0`,
        fontSize: variables.commentMetaFontSize,
        lineHeight: variables.commentMetaLineHeight,
        color: variables.commentMetaColor
      },
      body: {},
      primary: {}
    };
  }

  render() {
    const styles = this.getStyles();
    const props = this.props;

    return (
      <Div style={[props.primary && styles.primary]}>
        <Div style={styles.header.base}>
          <Div style={styles.header.before} />
          <Img
            style={styles.avatar}
            src={props.avatar}
            alt="" />
          <H4 style={styles.title}>
            {props.userName}
          </H4>
          <Div style={styles.meta}>
            {moment(props.date).fromNow()}
          </Div>
          <Div style={styles.header.after} />
        </Div>
        <Div style={styles.body}>
          {props.children}
        </Div>
      </Div>
    );
  }
}
