'use strict';

import React from 'react';

export default class Menu extends React.Component {
  constructor () {
    super();
  }
  render() {
    return (
      <div id="menu" className="ui secondary vertical pointing menu">
        <div className="item">
          <div className="header">Models</div>
          <div className="menu">
            <a className="item">Company</a>
            <a className="item">Department</a>
            <a className="item">Employee</a>
            <a className="item">+ Add new model</a>
          </div>
        </div>
      </div>
    );
  }
}
