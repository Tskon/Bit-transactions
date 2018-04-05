import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Redirect} from 'react-router';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getUser} from "~/actions/auth-actions";

import Menu from '~/components/menu/menu';
import Auth from '~/components/pages/auth';
import NewTransaction from '~/components/pages/new-transaction';
import AllTransactions from '~/components/pages/all-transactions';


class IndexPage extends React.Component {
  constructor() {
    super(...arguments);
  }

  componentWillMount() {
    this.props.dispatch(getUser());
  }

  render() {
    let menu;
    if (this.props.auth.user.isAuth) menu = <Menu/>;

    let routes;
    if (this.props.auth.user.isAuth) {
      routes = (
        <Switch>
          <Route exact path='/' component={AllTransactions}/>
          <Route path='/add' component={NewTransaction}/>
          <Route path='/' render={() => {return (<Redirect to="/"/>)}}/>
        </Switch>
      )
    } else {
      routes = (
      <Switch>
        <Route path='/' render={() => {
          return (!this.props.auth.user.isAuth) ? (<Auth/>) : (<Redirect to="/"/>);
        }}/>
      </Switch>
      );
    }

    return (
      <div className="container">
        {menu}
        {routes}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default withRouter(connect(mapStateToProps)(IndexPage));