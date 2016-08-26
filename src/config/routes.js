import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from '../App';

const App = ({ children}) =>
  <div>
    {children}
  </div>;

const Routes = (
  <Route path={'/'} component={App}>
    <IndexRoute component={Main} />
    <Route path={'/:feedName'} component={Main} />
  </Route>
);

export default Routes;
