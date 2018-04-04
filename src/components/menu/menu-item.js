import React from 'react';
import {NavLink} from 'react-router-dom';

export default class MenuItem extends React.Component {
  isActiveFunc(link){
    link = link.split('/');
    const hash = document.location.hash.slice(1).split('/');
    return link[1] === hash[1];
  }
  render() {
    return (
      <NavLink isActive={()=>{return this.isActiveFunc(this.props.data.link)}} activeClassName="main-menu__item_active" to={this.props.data.link}>
        <li className="main-menu__li">
          {this.props.data.title}
        </li>
      </NavLink>
    );
  }
}