import React from 'react';
import Radium from 'radium';
import moment from 'moment';

import variables from './styles/variables';

import Div from './base/div';
import P from './base/p';
import { H1 } from './base/hn';
import A from './base/a';

@Radium
export default class Article extends React.Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    userName: React.PropTypes.string.isRequired,
    date: React.PropTypes.instanceOf(Date).isRequired,
    categories: React.PropTypes.array,
    moreLink: React.PropTypes.string
  };

  static defaultProps = {
    categories: []
  };

  getStyles() {
    return {
      title: {
        fontSize: variables.articleTitleFontSize,
        lineHeight: variables.articleTitleLineHeight,
        fontWeight: variables.articleTitleFontWeight,
        textTransform: variables.articleTitleTextTransform
      },
      meta: {
        fontSize: variables.articleMetaFontSize,
        lineHeight: variables.articleMetaLineHeight,
        color: variables.articleMetaColor
      }
    };
  }

  render() {
    const styles = this.getStyles();
    const props = this.props;

    return (
      <Div>
        <H1 style={styles.title}>{props.title}</H1>
        <P style={styles.meta}>Written by {props.userName} on {moment(props.date).format('DD MMMM YYYY')}. Posted in {props.categories.join(', ')}</P>
        <Div>
          {props.children}
        </Div>
        {props.moreLink ? (
          <A href={props.moreLink}>Read More</A>
        ): null}
      </Div>
    );
  }
}
