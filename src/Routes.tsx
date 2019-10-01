import * as React from 'react';
import { NativeRouter as Router, Route, Switch } from 'react-router-native';

// containers
import Home from './containers/Home';
import Map from './containers/Map';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/map' component={Map} />
      </Switch>
    </Router>
  );
};

export default Routes;