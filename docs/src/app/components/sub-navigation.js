import React from 'react';
import { Link } from 'react-router';

export default class SubNavigation extends React.Component {
  static propTypes = {
    items: React.PropTypes.array.isRequired
  };

  static contextTypes = {
    router: React.PropTypes.func
  };

  render() {
    const router = this.context.router;
    let items = [];

    this.props.items.forEach((item) => {
      items.push(
        <li className="uk-nav-header">{item.label}</li>
      );

      items = items.concat(item.children.map((child) => {
        return (
          <li className={router.isActive(child.href) ? 'uk-active' : ''}>
            <Link to={child.href}>{child.label}</Link>
          </li>
        );
      }));
    });

    return (
      <ul className="tm-nav uk-nav" data-uk-nav="">
        {items}
      </ul>
    );
  }
}
