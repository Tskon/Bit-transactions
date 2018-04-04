import React from 'react';

export default class Auth extends React.Component {
  render() {
    return (
      <div className="auth">
        <input type="login" placeholder="Login"/>
        <input type="password" placeholder="Password"/>
        <input type="button" value="Enter" onClick={() => {
          const login = document.querySelector('input[type="login"]');
          const password = document.querySelector('input[type="password"]');
          if (login.value !== '' && password.value !== '') {
            localStorage.setItem('login', login.value);
            localStorage.setItem('password', password.value);
            location.reload();
          } else {
            alert('empty login or password');
          }
        }
        }/>
      </div>
    )
  }
}
