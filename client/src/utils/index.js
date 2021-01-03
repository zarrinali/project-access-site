import axios from 'axios';

export const checkLogin = async () => {
  const status = await axios.get(`${window.location.origin.toString()}/api/auth/isLoggedIn`);
  return status.data;
};