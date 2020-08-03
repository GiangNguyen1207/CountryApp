import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './firstpage';
import CountryDetails from './secondpage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/products/:name" component={CountryDetails} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
