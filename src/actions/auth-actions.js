import axios from 'axios';

export function getUser() {
  return {
    type: 'GET_USER',
    payload: axios.get('http://localhost:8090/get/user')
  }
}

export function logOut() {
  return {
    type: 'LOG_OUT',
    payload: axios.get('http://localhost:8090/logout')
  }
}

export function setUser(login, password) {
  return {
    type: 'SET_USER',
    payload: axios.get('http://localhost:8090/set/user', {
      params: {
        login: login,
        password: password
      }
    })
  }
}