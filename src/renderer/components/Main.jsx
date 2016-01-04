'use strict';

import React from 'react';
import Header from './Header';
import Menu from './Menu';

export default class Main extends React.Component {
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
