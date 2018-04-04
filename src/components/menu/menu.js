import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import MenuItem from '~/components/menu/menu-item';

export default class Menu extends React.Component {
  constructor() {
    super(...arguments);
    this.logOutHandler = this.logOutHandler.bind(this);
  }

  logOutHandler(e) {
    e.preventDefault();
    localStorage.clear();
    location.reload();
  }

  render() {
    const menuItems = [
      {
        title: 'All transactions',
        link: '/'
      },
      {
        title: 'New transaction',
        link: '/add'
      }
    ];

    let items = menuItems.map((item, i) => {
      return <MenuItem data={item} key={i}/>;
    });

    return (
      <div>
        <ul className="main-menu">
          {items}
          <a href="#" onClick={this.logOutHandler}>
            <li>Logout</li>
          </a>
        </ul>
      </div>
    );
  }
}