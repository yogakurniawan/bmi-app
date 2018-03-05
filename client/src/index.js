import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import App from 'containers/App';
import configureStore from './store';
import 'sanitize.css';
import './index.css';

try {
  injectTapEventPlugin();
} catch (e) {
  console.log("error on calling injectTapEventPlugin()");
}

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif'
});

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>, document.getElementById('root'));