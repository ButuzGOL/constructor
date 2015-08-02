import React from 'react';
import EnhancedH from './EnhancedH';

export class H1 extends React.Component {
  render() {
    return (
      <EnhancedH type="h1">
        {this.props.children}
      </EnhancedH>
    );
  }
}

export class H2 extends React.Component {
  render() {
    return (
      <EnhancedH type="h2">
        {this.props.children}
      </EnhancedH>
    );
  }
}

export class H3 extends React.Component {
  render() {
    return (
      <EnhancedH type="h3">
        {this.props.children}
      </EnhancedH>
    );
  }
}

export class H4 extends React.Component {
  render() {
    return (
      <EnhancedH type="h4">
        {this.props.children}
      </EnhancedH>
    );
  }
}

export class H5 extends React.Component {
  render() {
    return (
      <EnhancedH type="h5">
        {this.props.children}
      </EnhancedH>
    );
  }
}

export class H6 extends React.Component {
  render() {
    return (
      <EnhancedH type="h6">
        {this.props.children}
      </EnhancedH>
    );
  }
}
