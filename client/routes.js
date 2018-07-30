import React from 'react';
import { Home } from './components';
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    )
}

export default Routes;
