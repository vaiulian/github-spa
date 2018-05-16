import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { lightBlue600 } from 'material-ui/styles/colors';

import Header from './components/header';
import Menu from './components/menu';

import Routes from './routes';
import store from './store';

import { getGithubProfiles } from './AppActions';

import './App.css';


injectTapEventPlugin();

const applicationTheme = getMuiTheme({
  palette: {
    primary1Color: lightBlue600,
  },
});

/**
 * <ReactApp> main component.
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * Lifecycle method.
   *
   * @memberof App
   * @returns {void}
   */
  componentDidMount() {
    store.dispatch(getGithubProfiles());
  }

  /**
   * Render function of App
   *
   * @returns {ReactElement} markup
   * @memberof App
   */
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={applicationTheme}>
          <div className="row App">
            <Router>
              <div>
                <Header />
                <Menu />
                <Route path="/" component={Routes} />
              </div>
            </Router>
          </div>

        </MuiThemeProvider>
      </Provider>
    );
  }
}


export default App;
