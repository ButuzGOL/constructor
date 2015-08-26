import React from 'react';
import DocumentTitle from 'react-document-title';

import Doc from '../../components/doc';

import { Comment, P } from 'constructor';

export default class BlockPage extends React.Component {
  render() {
    return (
      <DocumentTitle title="Comment component - Constructor">
        <article className="uk-article">
          <h1 className="uk-article-title">Comment</h1>
          <p className="uk-article-lead">Create articles within your page.</p>

          <Doc
            name="Usage"
            code={``}>

            <Comment
              userName="Author"
              avatar="http://getuikit.com/docs/images/placeholder_avatar.svg"
              date={new Date(2015, 8, 14)}>
              <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</P>
            </Comment>

          </Doc>

        </article>
      </DocumentTitle>
    );
  }
}
