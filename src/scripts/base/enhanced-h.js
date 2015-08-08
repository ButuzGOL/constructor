import React from 'react';
import Radium from 'radium';
import variables from '../styles/variables';

@Radium
export default class EnhancedH extends React.Component {
  static propTypes = {
    type: React.PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
  };

  getStyles() {
    return {
      base: {
        margin: `0 0 ${variables.baseMarginVertical}px 0`,
        fontFamily: variables.baseHeadingFontFamily,
        fontWeight: variables.baseHeadingFontWeight,
        color: variables.baseHeadingColor,
        textTransform: variables.baseHeadingTextTransform,
        marginTop: variables.baseHeadingMarginTop
      },
      h1: {
        fontSize: variables.baseH1FontSize,
        lineHeight: `${variables.baseH1LineHeight}px`
      },
      h2: {
        fontSize: variables.baseH2FontSize,
        lineHeight: `${variables.baseH2LineHeight}px`
      },
      h3: {
        fontSize: variables.baseH3FontSize,
        lineHeight: `${variables.baseH3LineHeight}px`
      },
      h4: {
        fontSize: variables.baseH4FontSize,
        lineHeight: `${variables.baseH4LineHeight}px`
      },
      h5: {
        fontSize: variables.baseH5FontSize,
        lineHeight: `${variables.baseH5LineHeight}px`
      },
      h6: {
        fontSize: variables.baseH6FontSize,
        lineHeight: `${variables.baseH6LineHeight}px`
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
      <this.props.type style={[
        styles.base,
        styles[this.props.type]
      ].concat(this.props.style)}>
        {this.props.children}
      </this.props.type>
    );
  }
}
