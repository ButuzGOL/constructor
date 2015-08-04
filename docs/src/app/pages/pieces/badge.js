import React from 'react';
import DocumentTitle from 'react-document-title';

import Doc from '../../components/doc';

import { Badge } from 'constructor';

export default class BadgePage extends React.Component {
  render() {
    return (
      <DocumentTitle title="Badge component - Constructor">
        <article className="uk-article">
          <h1 className="uk-article-title">Badge</h1>
          <p className="uk-article-lead">Easlily create nicely looking badges to label and highlight your content.</p>

          <Doc
            name="Usage"
            desc={(
              <p>To create a badge, just add the <code>.uk-badge</code> class to a <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> element.</p>
            )}
            code={`<Badge>...</Badge>`}>
            <Badge>Info</Badge>
            {' '}
            <Badge>New</Badge>
            {' '}
            <Badge>Free</Badge>
          </Doc>

          <Doc
            name="Modifiers"
            desc={(
              <p>To display badges in a different style, just add modifier classes to the <code>.uk-badge</code> class. These modifiers can be combined with each other.</p>
            )}
            code={`<Badge notification={true}>...</Badge>`}>
            <Badge notification={true}>1</Badge>
            {' '}
            <Badge notification={true}>2</Badge>
            {' '}
            <Badge notification={true}>3</Badge>
            {' '}
            <Badge notification={true}>10</Badge>
            {' '}
            <Badge notification={true}>100</Badge>
          </Doc>

          <Doc
            name="Color Modifier"
            desc={(
              <p>Add the <code>.uk-badge-success</code>, <code>.uk-badge-warning</code> or <code>.uk-badge-danger</code> class for additional colors.</p>
            )}
            code={`<Badge type="success">...</Badge>
<Badge type="warning">...</Badge>
<Badge type="danger">...</Badge>`}>
            <Badge type="success">Success</Badge>
            {' '}
            <Badge type="warning">Warning</Badge>
            {' '}
            <Badge type="danger">Danger</Badge>
            <br />
            <Badge
              notification={true}
              type="success">1</Badge>
            {' '}
            <Badge
              notification={true}
              type="success">10</Badge>
            {' '}
            <Badge
              notification={true}
              type="warning">1</Badge>
            {' '}
            <Badge
              notification={true}
              type="warning">10</Badge>
            {' '}
            <Badge
              notification={true}
              type="danger">1</Badge>
            {' '}
            <Badge
              notification={true}
              type="danger">10</Badge>
          </Doc>

        </article>
      </DocumentTitle>
    );
  }
}
