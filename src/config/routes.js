import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from '../App';
import PostsList from '../containers/PostsList';
import PageSelector from '../containers/PageSelector';

// TODO: handle pageNumber here as well
const Routes = (
  <Route path={'/'} component={App}>
    {/* <Route path={'/comments/:itemId'} component={CommentView} /> */}
    <Route path={'/feed(/:feedName)'} components={{ body: PostsList, footer: PageSelector }} />
    <IndexRedirect to="feed/top" />
  </Route>
);

export default Routes;
