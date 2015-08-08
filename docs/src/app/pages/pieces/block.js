import React from 'react';
import DocumentTitle from 'react-document-title';

import Doc from '../../components/doc';

import { Block, Panel, Div, H3 } from 'constructor';

export default class BlockPage extends React.Component {
  render() {
    return (
      <DocumentTitle title="Badge component - Constructor">
        <article className="uk-article">
          <h1 className="uk-article-title">Block</h1>
          <p className="uk-article-lead">Separate content sections by bundling them in blocks with different styles.</p>

          <Doc
            name="Usage"
            code={``}>

            <Block
              type="muted">
              <Div style={{
                paddingLeft: 25,
                paddingRight: 25
              }}>
                <H3>Block</H3>
                <Div style={{
                  display: 'flex'
                }}>
                  <Panel
                    style={{
                      width: 200
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Panel>
                  <Panel
                    style={{
                      width: 200,
                      paddingLeft: 25
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Panel>
                  <Panel
                    style={{
                      width: 200,
                      paddingLeft: 25
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Panel>
                </Div>
              </Div>
            </Block>

            <br />

            <Block
              type="primary">
              <Div style={{
                paddingLeft: 25,
                paddingRight: 25,
                color: '#fff'
              }}>
                <H3 style={{ color: '#fff' }}>Block</H3>
                <Div style={{
                  display: 'flex'
                }}>
                  <Panel
                    style={{
                      width: 200
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Panel>
                  <Panel
                    style={{
                      width: 200,
                      paddingLeft: 25
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Panel>
                  <Panel
                    style={{
                      width: 200,
                      paddingLeft: 25
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Panel>
                </Div>
              </Div>
            </Block>


            <br />

            <Block
              type="secondary"
              large={true}>
              <Div style={{
                paddingLeft: 25,
                paddingRight: 25,
                color: '#fff'
              }}>
                <H3 style={{ color: '#fff' }}>Block</H3>
                <Div style={{
                  display: 'flex'
                }}>
                  <Panel
                    style={{
                      width: 200
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Panel>
                  <Panel
                    style={{
                      width: 200,
                      paddingLeft: 25
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Panel>
                  <Panel
                    style={{
                      width: 200,
                      paddingLeft: 25
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Panel>
                </Div>
              </Div>
            </Block>
          </Doc>

        </article>
      </DocumentTitle>
    );
  }
}
