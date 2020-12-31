import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkLogin } from './utils';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
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
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        isLogin && restricted ? <Redirect to="/dashboard" /> : <Component {...props} />
      }
    />
  ) : (
    <>
      <h1>Loading</h1>
    </>
  );
};

export default PublicRoute;
