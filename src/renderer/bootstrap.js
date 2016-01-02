'use strict';

import polyfill from 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './components/main';

ReactDOM.render(<Main/>, document.getElementById('app'));
