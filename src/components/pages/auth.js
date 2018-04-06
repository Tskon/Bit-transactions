import React from 'react';
import {connect} from 'react-redux';
import {setUser} from "~/actions/auth-actions";

class Auth extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      login: '',
      password: ''
    };

    this.loginHandler = this.loginHandler.bind(this);
    this.changeLoginHandler = this.changeLoginHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
  }

  changeLoginHandler(e){
    this.setState({login: e.target.value});
  }

  changePasswordHandler(e){
    this.setState({password: e.target.value});
  }

  loginHandler() {
    if (this.state.login !== '' && this.state.password !== '') {
      this.props.dispatch(setUser(this.state.login, this.state.password ));
    } else {
      alert('empty login or password');
    }
  }

  render() {
    return (
      <div className="auth">
        <form onSubmit={this.loginHandler}>
          <input type="login" placeholder="Login" onChange={this.changeLoginHandler}/>
          <input type="password" placeholder="Password" onChange={this.changePasswordHandler}/>
          <input type="submit" value="Enter"/>
        </form>
      </div>
    )
  }
}

export default connect()(Auth);