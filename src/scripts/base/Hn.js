import React from 'react';
import EnhancedH from './enhanced-h';

export class H1 extends React.Component {
  render() {
    return (
      <EnhancedH
        style={this.props.style}
        type="h1">
        {this.props.children}
      </EnhancedH>
    );
  }
}

export class H2 extends React.Component {
  render() {
    return (
      <EnhancedH
        style={this.props.style}
        type="h2">
        {this.props.children}
      </EnhancedH>
    );
  }
}

export class H3 extends React.Component {
  render() {
    return (
      <EnhancedH
        style={this.props.style}
        type="h3">
        {this.props.children}
      </EnhancedH>
    );
  }
}

export class H4 extends React.Component {
  render() {
    return (
      <EnhancedH
        style={this.props.style}
        type="h4">
        {this.props.children}
      </EnhancedH>
    );
  }
}

export class H5 extends React.Component {
  render() {
    return (
      <EnhancedH
        style={this.props.style}
        type="h5">
        {this.props.children}
      </EnhancedH>
    );
  }
}

export class H6 extends React.Component {
  render() {
    return (
      <EnhancedH
        style={this.props.style}
        type="h6">
        {this.props.children}
      </EnhancedH>
    );
  }
}
