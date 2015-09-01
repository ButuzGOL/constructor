import React from 'react';
import DocumentTitle from 'react-document-title';

import Doc from '../../components/doc';

import { Nav, Panel, NavBar, SubNav, Breadcrumb } from 'constructor';

export default class OtherPage extends React.Component {
  render() {
    return (
      <DocumentTitle title="Other component - Constructor">
        <article className="uk-article">
          <h1 className="uk-article-title">Other</h1>
          <p className="uk-article-lead">Create articles within your page.</p>

          <Doc
            name="Usage"
            code={``}>

            <Nav
              style={{
                width: 220
              }}
              items={[{
                label: 'Header',
                type: 'header'
              }, {
                label: 'Active',
                subLabel: 'Subtitle',
                active: true,
                href: '#'
              }, {
                label: 'Item',
                href: '#'
              }, {
                label: 'Header',
                type: 'header'
              }, {
                label: 'Parent',
                type: 'parent',
                collapsed: true,
                children: [{
                  label: 'Sub item',
                  href: '#'
                }, {
                  label: 'Sub item',
                  href: '#',
                  children: [{
                    label: 'Sub item',
                    href: '#'
                  }, {
                    label: 'Sub item',
                    href: '#'
                  }]
                }]
              }, {
                label: 'Parent',
                type: 'parent',
                collapsed: false,
                children: [{
                  label: 'Sub item',
                  href: '#'
                }, {
                  label: 'Sub item',
                  href: '#',
                  children: [{
                    label: 'Sub item',
                    href: '#'
                  }, {
                    label: 'Sub item',
                    href: '#'
                  }]
                }]
              }, {
                type: 'divider'
              }, {
                label: 'Item',
                subLabel: 'Subtitle',
                href: '#'
              }]} />

            <br />

            <Panel
              title="Nav side in panel"
              box={true}
              style={{
                width: 200
              }}>

              <Nav
                style={{
                  margin: '0 -15px'
                }}
                items={[{
                  label: 'Active',
                  subLabel: 'Subtitle',
                  active: true,
                  href: '#'
                }, {
                  label: 'Item',
                  href: '#'
                }]} />

            </Panel>

            <br />

            <NavBar
              brand={{
                label: 'Brand',
                href: '#'
              }}
              items={[{
                label: 'Item',
                href: '#',
                subLabel: 'Subtitle',
                position: 'right'
              }, {
                label: 'Item',
                href: '#',
                subLabel: 'Subtitle'
              }, {
                label: 'Active',
                active: true,
                href: '#'
              }, {
                label: 'Parent',
                type: 'parent',
                children: [{
                  label: 'Header',
                  type: 'header'
                }, {
                  label: 'Active',
                  subLabel: 'Subtitle',
                  active: true,
                  href: '#'
                }, {
                  label: 'Item',
                  href: '#'
                }, {
                  label: 'Header',
                  type: 'header'
                }, {
                  label: 'Parent',
                  type: 'parent',
                  collapsed: true,
                  children: [{
                    label: 'Sub item',
                    href: '#'
                  }, {
                    label: 'Sub item',
                    href: '#',
                    children: [{
                      label: 'Sub item',
                      href: '#'
                    }, {
                      label: 'Sub item',
                      href: '#'
                    }]
                  }]
                }, {
                  label: 'Parent',
                  type: 'parent',
                  collapsed: false,
                  children: [{
                    label: 'Sub item',
                    href: '#'
                  }, {
                    label: 'Sub item',
                    href: '#',
                    children: [{
                      label: 'Sub item',
                      href: '#'
                    }, {
                      label: 'Sub item',
                      href: '#'
                    }]
                  }]
                }, {
                  type: 'divider'
                }, {
                  label: 'Item',
                  subLabel: 'Subtitle',
                  href: '#'
                }]
              }]} />

            <br />

            <SubNav
              pill={true}
              items={[{
                label: 'Item',
                href: '#',
                active: true
              }, {
                label: 'Item',
                href: '#'
              }, {
                label: 'Item',
                href: '#',
                disabled: true
              }, {
                label: 'Item',
                children: [{
                  label: 'Header',
                  type: 'header'
                }, {
                  label: 'Active',
                  subLabel: 'Subtitle',
                  active: true,
                  href: '#'
                }, {
                  label: 'Item',
                  href: '#'
                }, {
                  label: 'Header',
                  type: 'header'
                }, {
                  label: 'Parent',
                  type: 'parent',
                  collapsed: true,
                  children: [{
                    label: 'Sub item',
                    href: '#'
                  }, {
                    label: 'Sub item',
                    href: '#',
                    children: [{
                      label: 'Sub item',
                      href: '#'
                    }, {
                      label: 'Sub item',
                      href: '#'
                    }]
                  }]
                }, {
                  label: 'Parent',
                  type: 'parent',
                  collapsed: false,
                  children: [{
                    label: 'Sub item',
                    href: '#'
                  }, {
                    label: 'Sub item',
                    href: '#',
                    children: [{
                      label: 'Sub item',
                      href: '#'
                    }, {
                      label: 'Sub item',
                      href: '#'
                    }]
                  }]
                }, {
                  type: 'divider'
                }, {
                  label: 'Item',
                  subLabel: 'Subtitle',
                  href: '#'
                }]
              }]} />

            <br />

            <Breadcrumb
              items={[{
                label: 'Home',
                href: '#'
              }, {
                label: 'Blog',
                href: '#'
              }, {
                label: 'Category',
                href: '#',
                disabled: true
              }, {
                label: 'Post',
                active: true
              }]}
            />
          </Doc>

        </article>
      </DocumentTitle>
    );
  }
}
