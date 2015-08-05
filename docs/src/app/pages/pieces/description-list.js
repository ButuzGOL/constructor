import React from 'react';
import DocumentTitle from 'react-document-title';

import Doc from '../../components/doc';

import { DescriptionList } from 'constructor';

export default class DescriptionListPage extends React.Component {
  render() {
    return (
      <DocumentTitle title="Description list component - Constructor">
        <article className="uk-article">
          <h1 className="uk-article-title">Description list</h1>
          <p className="uk-article-lead">Easily create nicely looking description lists, which come in different styles.</p>

          <Doc
            name="Description list horizontal"
            desc={(
              <p>Add the <code>.uk-description-list-horizontal</code> class to display terms and descriptions side by side.</p>
            )}
            code={`<DescriptionList
  type="horizontal"
  items={[{
    label: '...',
    data: '...'
  }]} />`}>

            <DescriptionList
              type="horizontal"
              items={[{
                label: 'Description lists',
                data: 'A description list defines terms and their corresponding descriptions.'
              }, {
                label: 'Lorem ipsum',
                data: 'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }, {
                label: 'A long term is truncated',
                data: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
              }]} />

          </Doc>

          <Doc
            name="Description list line"
            desc={(
              <p>Add the <code>.uk-description-list-line</code> class to separate the description list items with lines.</p>
            )}
            code={`<DescriptionList
  items={[{
    label: '...',
    data: '...'
  }]} />`}>

            <DescriptionList
              items={[{
                label: 'Description list line',
                data: 'A description list defines terms and their corresponding descriptions.'
              }, {
                label: 'Lorem ipsum',
                data: 'Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }, {
                label: 'A long term is truncated',
                data: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
              }]} />

          </Doc>

        </article>
      </DocumentTitle>
    );
  }
}
