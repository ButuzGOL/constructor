import React from 'react';

export default class Img extends React.Component {
  static propTypes = {
    src: React.PropTypes.string.isRequired,
    alt: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  };

  static defaultProps = {
    alt: ''
  };

  getStyles() {
    return {
      maxWidth: '100%',
      height: 'auto',
      boxSizing: 'border-box',
      border: 0,
      verticalAlign: 'middle'
    };
  }

  render() {
    const props = this.props;

    return (
      <img
        style={this.getStyles()}
        src={props.src}
        width={props.width}
        height={props.height}
        alt={props.alt} />
    );
  }
}
