import axios from 'axios';

export function isAuth() {
  return {
    type: 'ISAUTH',
    payload: axios.get('http://localhost:8090/get/user')
  }
}