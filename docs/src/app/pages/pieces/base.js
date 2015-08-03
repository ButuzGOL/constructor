import React from 'react';
import DocumentTitle from 'react-document-title';

import Doc from '../../components/doc';

import {
  H1, H2, H3, H4, H5, H6,
  P, A, Em, Strong, Code, Del, Ins, Mark, Q, Abbr, Dfn, Small,
  Hr, Blockquote, List, Img
} from 'constructor';

export default class BasePage extends React.Component {
  render() {
    return (
      <DocumentTitle title="Base component - Constructor">
        <article className="uk-article">
          <h1 className="uk-article-title">Base</h1>
          <p className="uk-article-lead">Provides the default style for all HTML elements.</p>
          <p>This component defines the base look of your page. It offers great typography by setting the default colors, margins, font-sizes and more for each HTML element. This page is a short guide on how to use basic HTML elements and how UIkit styles them.</p>
          <p><span className="uk-badge">Note</span> Basically UIkit utilizes the famous <a href="http://necolas.github.com/normalize.css">Normalize.css</a>, but distributed it among all components. Only the necessary parts are adopted into the Base component to keep the unprefixed CSS as small as possible. Most of the normalization related CSS is moved into the <a href="form.html">Form</a>, <a href="button.html">Button</a> and <a href="table.html">Table</a> components. This makes UIkit and its components very robust against conflicts with other CSS frameworks so that you don't have to worry about browser inconsistencies in your projects.</p>

          <hr className="uk-article-divider" />

          <Doc
            name="Headings"
            desc={(
              <P>Use the <Code>&lt;H1&gt;</Code> to <Code>&lt;H6&gt;</Code> pieces to define your headings.</P>
            )}>
            <H1>h1 Heading 1</H1>
            <H2>h2 Heading 2</H2>
            <H3>h3 Heading 3</H3>
            <H4>h4 Heading 4</H4>
            <H5>h5 Heading 5</H5>
            <H6>h6 Heading 6</H6>
          </Doc>

          <Doc
            name="Paragraphs"
            desc={(
              <P>The global font-size, line-height and regular margins between elements are set through variables, which can be customized. Paragraphs and other block elements stick to these values.</P>
            )} />

          <Doc
            name="Text-level semantics"
            desc={(
              <P>The following list gives you a short overview of the most commonly used text-level semantics and how to utilize them.</P>
            )}>

            <div className="uk-overflow-container">
              <table className="uk-table uk-table-hover uk-table-condensed uk-text-nowrap">
                <thead>
                  <tr>
                    <th className="uk-width-1-4">Element</th>
                    <th className="uk-width-3-4">Description</th>
                  </tr>
                </thead>
                  <tbody>
                    <tr>
                      <td><Code>&lt;A&gt;</Code></td>
                      <td>Turn text into hypertext using the <A href="#">a element</A>.</td>
                    </tr>
                    <tr>
                      <td><Code>&lt;Em&gt;</Code></td>
                      <td>Emphasize text using the <Em>em element</Em>.</td>
                    </tr>
                    <tr>
                      <td><Code>&lt;Strong&gt;</Code></td>
                      <td>Imply any extra importance using the <Strong>strong element</Strong>.</td>
                    </tr>
                    <tr>
                      <td><Code>&lt;Code&gt;</Code></td>
                      <td>Define inline Code snippets using the <Code>Code element</Code>.</td>
                    </tr>
                    <tr>
                      <td><Code>&lt;Del&gt;</Code></td>
                      <td>Mark document changes as deleted text using the <Del>del element</Del>.</td>
                    </tr>
                    <tr>
                      <td><Code>&lt;Ins&gt;</Code></td>
                      <td>Mark document changes as inserted text using the <Ins>ins element</Ins>.</td>
                    </tr>
                    <tr>
                      <td><Code>&lt;Mark&gt;</Code></td>
                      <td>Highlight text with no semantic meaning using the <Mark>mark element</Mark>.</td>
                    </tr>
                    <tr>
                      <td><Code>&lt;Q&gt;</Code></td>
                      <td>Define inline quotations using <Q>q element <Q>inside</Q> a q element</Q>.</td>
                    </tr>
                    <tr>
                      <td><Code>&lt;Abbr&gt;</Code></td>
                      <td>Define an abbreviation using the <Abbr title="Abbreviation Element">abbr element</Abbr> with a title.</td>
                    </tr>
                    <tr>
                      <td><Code>&lt;Dfn&gt;</Code></td>
                      <td>Define a definition term using the <Dfn title="Defines a definition term">dfn element</Dfn> with a title.</td>
                    </tr>
                    <tr>
                      <td><Code>&lt;Small&gt;</Code></td>
                      <td>De-emphasize text for small print using the <Small>small element</Small>.</td>
                    </tr>
                  </tbody>
              </table>
            </div>

          </Doc>

          <Doc
            name="Horizontal rule"
            desc={(
              <P>Create a horizontal rule by using the <Code>&lt;Hr /&gt;</Code> element.</P>
            )}>
            <Hr />
          </Doc>

          <Doc
            name="Blockquotes"
            desc={(
              <P>For quoting multiple lines of content from another source within your document, use the <Code>&lt;Blockquote&gt;</Code> element.</P>
            )}>
            <Blockquote>
              <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</P>
              <Small>Someone famous</Small>
            </Blockquote>
          </Doc>

          <Doc
            name="Blockquotes"
            desc={(
              <P>For quoting multiple lines of content from another source within your document, use the <Code>&lt;Blockquote&gt;</Code> element.</P>
            )}>
            <Blockquote>
              <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</P>
              <Small>Someone famous</Small>
            </Blockquote>
          </Doc>

          <Doc
            name="Lists"
            desc={(
              <P>Create an unordered list using the <Code>&lt;ul&gt;</Code> element and the <Code>&lt;ol&gt;</Code> element for ordered lists. The <code>&lt;li&gt;</code> element defines the list item.</P>
            )}>

            <div className="uk-grid" data-uk-grid-margin="">
              <div className="uk-width-medium-1-2">
                <div className="uk-panel">

                  <List items={[{
                      label: 'Item 1'
                    }, {
                      label: 'Item 2',
                      children: [{
                        label: 'Item 1'
                      }, {
                        label: 'Item 2',
                        children: [{
                          label: 'Item 1'
                        }, {
                          label: 'Item 2'
                        }]
                      }]}, {
                      label: 'Item 3'
                    }, {
                      label: 'Item 4'
                    }]} />

                </div>
              </div>
              <div className="uk-width-medium-1-2">
                <div className="uk-panel">

                <List
                  type="numbers"
                  items={[{
                    label: 'Item 1'
                  }, {
                    label: 'Item 2',
                    children: [{
                      label: 'Item 1'
                    }, {
                      label: 'Item 2',
                      children: [{
                        label: 'Item 1'
                      }, {
                        label: 'Item 2'
                      }]
                    }]}, {
                    label: 'Item 3'
                  }, {
                    label: 'Item 4'
                  }]} />

                </div>
              </div>
            </div>

          </Doc>

          <Doc
            name="Description lists"
            desc={(
              <P>Create a description list using the <Code>&lt;dl&gt;</Code> element. Use <Code>&lt;dt&gt;</Code> to define the term and <Code>&lt;dd&gt;</Code> for the description.</P>
            )}>
            <List
              type="description"
              items={[{
                label: 'Description lists',
                data: 'A description list defines terms and their corresponding descriptions.'
              }, {
                label: 'This is a term',
                data: 'This is a description.'
              }, {
                label: 'This is a term',
                data: 'This is a description.'
              }]} />
          </Doc>

          <Doc
            name="Responsive images"
            desc={(
              <P>All images in UIkit are responsive by default. If the layout is narrowed, images adjust their size and keep their proportions.</P>
            )}>

            <P>Resize the browser window to see the responsive behavior of the image.</P>
            <Img
              width="480"
              height="260"
              src="http://getuikit.com/docs/images/placeholder_480x260.svg"
              alt="" />

          </Doc>

        </article>
      </DocumentTitle>
    );
  }
}
