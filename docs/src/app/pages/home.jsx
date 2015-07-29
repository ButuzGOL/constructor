import React from 'react';

export default class Master extends React.Component {
  render() {
    return (
      <div>
        <div
          className="tm-section tm-section-color-1 tm-section-colored">
          <div
            className="uk-container uk-container-center uk-text-center">

              <p style={{
                fontSize: 88,
                fontWeight: 900,
                marginBottom: 50
              }}>
                Co
              </p>

              <p className="uk-text-large intro">
                A set of UI pieces and components
                <br className="uk-hidden-small" />
                based on <a href="http://facebook.github.io/react/">React</a> and <a href="http://getuikit.com/">UIkit</a>
              </p>

              <a
                className="uk-button tm-button-download"
                data-uikit-download="" href="">Download Constructor</a>

              <ul className="tm-subnav uk-subnav uk-flex-center">
                <li><a href="https://github.com/ButuzGOL/constructor">GitHub</a></li>
                <li><a href="">Get Started</a></li>
                <li data-uikit-version="">Version 0.1.0</li>
              </ul>
          </div>
        </div>
        <div className="tm-section tm-section-color-2 tm-section-colored">
          <div className="uk-container uk-container-center uk-text-center">

            <h1 className="uk-heading-large">Features</h1>

            <p className="uk-text-large">Constructor gives you a comprehensive collection of UI pieces and components<br className="uk-hidden-small" /> which is simple to use, easy to monipulate and extendable.</p>

            <div className="uk-grid" data-uk-grid-margin="">

              <div className="uk-width-medium-1-4">
                <div className="uk-panel">
                  <img className="tm-image-pull" src="http://getuikit.com/docs/images/icon_components.svg" width="200" height="140" alt="Pieces" />
                  <h2 className="uk-margin-top-remove">Pieces</h2>
                  <p>A collection of small, responsive pieces using consistent and conflict-free naming conventions.</p>
                </div>
              </div>

              <div className="uk-width-medium-1-4">
                <div className="uk-panel">
                  <img className="tm-image-pull" src="http://getuikit.com/docs/images/icon_components.svg" width="200" height="140" alt="Components" />
                  <h2 className="uk-margin-top-remove">Components</h2>
                  <p>A collection of components that represet composition of pieces.</p>
                </div>
              </div>

              <div className="uk-width-medium-1-4">
                <div className="uk-panel">
                  <img className="tm-image-pull" src="http://getuikit.com/docs/images/icon_components.svg" width="200" height="140" alt="Props, Methods and Events" />
                  <h2 className="uk-margin-top-remove">Props, Methods And Events</h2>
                  <p>Each component has props, methods and events that gives you good I/O for comunication.</p>
                </div>
              </div>

              <div className="uk-width-medium-1-4">
                  <div className="uk-panel">
                      <img className="tm-image-pull" src="http://getuikit.com/docs/images/icon_components.svg" width="200" height="140" alt="Customizer" />
                      <h2 className="uk-margin-top-remove">Customizer</h2>
                      <p>You can easily create your own theme base on variables.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
