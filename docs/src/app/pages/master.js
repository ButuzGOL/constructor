import React from 'react';
import { RouteHandler } from 'react-router';
import DocumentTitle from 'react-document-title';

import Navigation from '../components/navigation';
import Footer from '../components/footer';

export default class Master extends React.Component {
  render() {
    return (
      <DocumentTitle title="Constructor">
        <div className="tm-background">
          <Navigation />
          <RouteHandler {...this.props} />
          <Footer />
        </div>
      </DocumentTitle>
    );
  }
}
