import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
  return function(dispatch) {
    //replace with relative path /api/user
    axios.get('https: //node-react-fullstack-michaeltombor.c9users.io:8081/api/user')
      .then(res => dispatch({ type: FETCH_USER, payload: res }))
  }
};
