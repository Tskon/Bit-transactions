import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Redirect} from 'react-router';

import Menu from '~/components/menu/menu';
import Auth from '~/components/pages/auth';
import NewTransaction from '~/components/pages/new-transaction';
import AllTransactions from '~/components/pages/all-transactions';


export default class IndexPage extends React.Component {
  render() {
    let menu;
    if (localStorage.login) menu = <Menu/>;
    return (
      <div className="container">
        {menu}
        <Switch>
          <Route exact path='/' render={() => {
            return (localStorage.login) ? (<AllTransactions/>) : (<Redirect to="/login"/>);
          }}/>
          <Route path='/add' render={() => {
            return (localStorage.login) ? (<NewTransaction/>) : (<Redirect to="/login"/>);
          }}/>
          <Route path='/login' render={() => {
            return (localStorage.login) ? (<Redirect to="/"/>) : (<Auth/>);
          }}/>
        </Switch>
      </div>
    )
  }
}