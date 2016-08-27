import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Feed from '../App';

// TODO: Move header here?
const App = ({ children }) =>
  <div>
    {children}
  </div>;

// TODO: handle pageNumber here as well
const Routes = (
  <Route path={'/'} component={App}>
    {/* <Route path={'/comments(/:itemId)'} component={CommentView} /> */}
    <Route path={'/feed(/:feedName)'} component={Feed} />
    <IndexRedirect to="feed" />
  </Route>
);

export default Routes;
