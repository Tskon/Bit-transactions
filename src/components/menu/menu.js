import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import {logOut} from "~/actions/auth-actions";

import MenuItem from '~/components/menu/menu-item';

class Menu extends React.Component {
  constructor() {
    super(...arguments);
    this.logOutHandler = this.logOutHandler.bind(this);
  }

  logOutHandler(e) {
    this.props.dispatch(logOut());
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
          <Link to="/login" onClick={this.logOutHandler}>
            <li>Logout</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default withRouter(connect()(Menu));