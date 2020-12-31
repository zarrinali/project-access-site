import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkLogin } from './utils';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    // make a call to login API to check user's authentication
    async function checkAuth() {
      await checkLogin()
        .then((res) => {
          setIsLogin(res);
          setIsLoaded(true);
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
      <h1>Loading</h1>
    </>
  );
};

export default PrivateRoute;
