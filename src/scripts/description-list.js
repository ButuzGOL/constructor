import React from 'react';
import Radium from 'radium';

import variables from './styles/variables';

@Radium
export default class DescriptionList extends React.Component {
  static propTypes = {
    type: React.PropTypes.oneOf(['line', 'horizontal'])
  };

  static defaultProps = {
    type: 'line'
  };

  getStyles() {
    return {
      base: {
        margin: `0 0 ${variables.baseMarginVertical}px 0`
      },
      dd: {
        marginLeft: 0
      },
      dt: {
        fontWeight: 'bold'
      },
      horizontal: {
        overflow: 'hidden'
      },
      horizontalDt: {
        width: variables.descriptionListHorizontalWidth,
        float: 'left',
        clear: 'both',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      horizontalDd: {
        marginLeft: variables.descriptionListHorizontalMarginLeft
      },
      lineDt: {
        fontWeight: 'normal'
      },
      lineDtNext: {
        marginTop: variables.descriptionListLineMarginTop,
        paddingTop: variables.descriptionListLineMarginTop,
        borderTop: `${variables.descriptionListLineBorderWidth}px solid ${variables.descriptionListLineBorder}`
      },
      lineDd: {
        color: variables.descriptionListLineColor
      }
    };
  }

  render() {
    const styles = this.getStyles();
    const props = this.props;

    const horizontal = props.type === 'horizontal';
    const line = props.type === 'line';

    let items = [];
    props.items.forEach((item, index) => {
      items.push(<dt style={[
        styles.dt,
        horizontal && styles.horizontalDt,
        line && styles.lineDt,
        line && index && styles.lineDtNext
      ]}>{item.label}</dt>);
      items.push(<dd style={[
        styles.dd,
        horizontal && styles.horizontalDd,
        line && styles.lineDd
      ]}>{item.data}</dd>);
    });

    return (
      <dl style={[
        styles.base,
        props.horizontal && styles.horizontal
      ]}>
        {items}
      </dl>
    );
  }
}
