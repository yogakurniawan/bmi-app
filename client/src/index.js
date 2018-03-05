import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {  hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { configureStore } from './store'
import App from './components/App';
import './styles/main.css';

const state = window.__initialState__ || undefined;
const store = configureStore(hashHistory, state);
const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
  <MuiThemeProvider>
      <Provider store={store}>
        <App/>
      </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
