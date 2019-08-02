import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginPage } from '../pages/login';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" exact component={LoginPage} />
      <Redirect from="*" to="/login" />
    </Switch>
  );
};
export default Routes;
