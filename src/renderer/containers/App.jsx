'use strict';

import React from 'react';
import Header from '../components/Header';
import Menu from '../components/Menu';

export default class App extends React.Component {
  constructor () {
    super();
  }
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
      </div>
    );
  }
}
