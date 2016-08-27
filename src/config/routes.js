import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Main from '../App';

// TODO: Move header here?
const App = ({ children }) =>
  <div>
    {children}
  </div>;

const Routes = (
  <Route path={'/'} component={App}>
    {/* <Route path={'/comments(/:itemId)'} component={CommentView} /> */}
    <Route path={'/feed(/:feedId)'} component={Main} />
    <IndexRedirect to="feed" />
  </Route>
);

export default Routes;
