import React from 'react';
import DocumentTitle from 'react-document-title';

import Doc from '../../components/doc';

import { List } from 'constructor';

export default class ListPage extends React.Component {
  render() {
    return (
      <DocumentTitle title="List component - Constructor">
        <article className="uk-article">
          <h1 className="uk-article-title">List</h1>
          <p className="uk-article-lead">Easily create nicely looking lists, which come in different styles.</p>

          <Doc
            name="Usage"
            desc={(
              <p>To create a badge, just add the <code>.uk-badge</code> class to a <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> element.</p>
            )}
            code={`<List
  items={[{
    label: '...'
  }]} />`}>

            <List
              items={[{
                label: 'List item 1'
              }, {
                label: 'List item 2'
              }, {
                label: 'List item 3'
              }]} />

          </Doc>

          <Doc
            name="List line"
            desc={(
              <p>Add the <code>.uk-list-line</code> class to separate list items with lines.</p>
            )}
            code={`<List
  line={true}
  items={[{
    label: '...'
  }]} />`}>

            <List
              style={{
                width: 220
              }}
              line={true}
              items={[{
                label: 'List item 1'
              }, {
                label: 'List item 2'
              }, {
                label: 'List item 3'
              }]} />

          </Doc>

          <Doc
            name="List striped"
            desc={(
              <p>Add zebra-striping to a list using the <code>.uk-list-striped</code> class.</p>
            )}
            code={`<List
  striped={true}
  items={[{
    label: '...'
  }]} />`}>

            <List
              style={{
                width: 220
              }}
              striped={true}
              items={[{
                label: 'List item 1'
              }, {
                label: 'List item 2'
              }, {
                label: 'List item 3'
              }]} />

          </Doc>

          <Doc
            name="List space"
            desc={(
              <p>Add the <code>.uk-list-space</code> class to increase the spacing between list items.</p>
            )}
            code={`<List
  space={true}
  items={[{
    label: '...'
  }]} />`}>

            <List
              style={{
                width: 220
              }}
              space={true}
              items={[{
                label: 'This modifier may be useful for for list items with multiple lines of text.'
              }, {
                label: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
              }, {
                label: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
              }]} />

          </Doc>

        </article>
      </DocumentTitle>
    );
  }
}
