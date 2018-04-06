import axios from 'axios';

export function getUser() {
  return {
    type: 'GET_USER',
    payload: axios.get('http://localhost:8090/get/user')
  }
}

export function logOut() {
  axios.get('http://localhost:8090/logout');
  return {
    type: 'LOG_OUT'
  }
}

export function setUser(login, password) {
  axios.get('http://localhost:8090/set/user', {
    params: {
      login: login,
      password: password
    }
  });

  return {
    type: 'SET_USER',
    payload: {
      login: login,
      password: password
    }
  }
}