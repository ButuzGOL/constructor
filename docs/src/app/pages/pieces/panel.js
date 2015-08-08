import React from 'react';
import DocumentTitle from 'react-document-title';

import Doc from '../../components/doc';

import { Panel, Badge } from 'constructor';

export default class ListPage extends React.Component {
  render() {
    return (
      <DocumentTitle title="Panel component - Constructor">
        <article className="uk-article">
          <h1 className="uk-article-title">Panel</h1>
          <p className="uk-article-lead">Create layout boxes with different styles.</p>

          <Doc
            name="Panel">

            <Panel
              title="Title"
              box={true}
              style={{
                width: 200
              }}
              badge={(
                <Badge type="danger">Hot</Badge>
              )}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Panel>

            <br />

            <Panel
              title="Title"
              box={true}
              type="primary"
              style={{
                width: 200
              }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Panel>

            <br />

            <Panel
              title="Title"
              hover={true}
              style={{
                width: 200
              }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Panel>

            <br />

            <Panel
              title="Title"
              header={true}
              style={{
                width: 200
              }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Panel>

            <br />

            <Panel
              title="Title"
              space={true}
              style={{
                width: 200
              }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Panel>

          </Doc>

        </article>
      </DocumentTitle>
    );
  }
}
