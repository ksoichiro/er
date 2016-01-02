'use strict';

import React from 'react';
import {Header} from './header';
import {Menu} from './menu';

export class Main extends React.Component {
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
