import axios from 'axios';

export const checkLogin = async () => {
  const status = await axios.get('http://localhost:9000/api/auth/isLoggedIn');
  return status.data;
};