import axios from 'axios';

export function fetchBanks() {
  return {
    type: 'FETCH_BANKS',
    payload: axios.post('http://localhost:8090/get/banks')
  }
}