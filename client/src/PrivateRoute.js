import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkLogin } from './utils';
import Loading from './components/Loading/Loading';
import { faTruckMonster } from '@fortawesome/free-solid-svg-icons';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    // make a call to login API to check user's authentication
    async function checkAuth() {
      await checkLogin()
        .then((res) => {
          setIsLogin(res);
          setIsLoaded(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    checkAuth();
  });

  return isLoaded ? (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) => (isLogin ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  ) : (
    <>
      <Loading />
    </>
  );
};

export default PrivateRoute;
