'use strict';

import React from 'react';
React;
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import erApp from './reducers';

let store = createStore(erApp);

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('app'));
