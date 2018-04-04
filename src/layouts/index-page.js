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
  constructor(){
    super(...arguments);
  }

  componentDidMount(){
    this.props.dispatch(getUser());
  }

  render() {
    if (!this.props.auth.user.isAuth) {
      window.location = '/#/login';
    }

    let menu;
    if (this.props.auth.user.isAuth) menu = <Menu/>;

    return (
      <div className="container">
        {menu}
        <Switch>
          <Route exact path='/' component={AllTransactions}/>
          <Route path='/add' component={NewTransaction}/>
          <Route path='/login' render={() => {
            return (!this.props.auth.user.isAuth) ? (<Auth/>) : (<Redirect to="/"/>);
          }}/>
        </Switch>
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