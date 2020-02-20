import React from 'react';
import { Route, Switch } from 'react-router-dom';


import { Home, Messages, SignIn } from '../../../pages';

export const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={SignIn} />
    <Route path="/messages" component={Messages} />
  </Switch>
);


export default Routes;