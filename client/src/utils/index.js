import axios from 'axios';

export const checkLogin = async () => {
  console.log('is Login');
  const status = await axios.get('http://localhost:9000/api/auth/isLoggedIn');
  console.log(status.data);
  return status.data;
};
