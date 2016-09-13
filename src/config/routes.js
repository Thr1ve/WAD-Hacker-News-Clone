import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from '../App';
import PostsList from '../containers/PostsList';
import PageSelector from '../containers/PageSelector';
import ThreadView from '../containers/ThreadView';

const Footer = () => <div></div>

const Routes = (
  <Route path={'/'} component={App}>
    <Route path={'/comments/:itemId'} components={{ body: ThreadView, footer: Footer }} />
    <Route path={'/feed(/:feedName)'} components={{ body: PostsList, footer: PageSelector }} />
    <IndexRedirect to="feed/top" />
  </Route>
);

export default Routes;
