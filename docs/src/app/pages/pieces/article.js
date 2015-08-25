import React from 'react';
import DocumentTitle from 'react-document-title';

import Doc from '../../components/doc';

import { Article, P, Hr } from 'constructor';

export default class BlockPage extends React.Component {
  render() {
    return (
      <DocumentTitle title="Article component - Constructor">
        <article className="uk-article">
          <h1 className="uk-article-title">Article</h1>
          <p className="uk-article-lead">Create articles within your page.</p>

          <Doc
            name="Usage"
            code={``}>

            <Article
              title="Article title"
              userName="Super User"
              date={new Date(2012, 3, 12)}
              categories={['Blog']}
              moreLink="#">
              <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</P>
              <hr />
              <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</P>
            </Article>

          </Doc>

        </article>
      </DocumentTitle>
    );
  }
}
