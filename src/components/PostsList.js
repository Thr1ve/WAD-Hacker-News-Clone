import { Map } from 'immutable';
import React, { PropTypes } from 'react';

import Post from './Post';
import Loading from './Loading.js';

const PostsList = ({ isLoading, visibleIds, data }) =>
  isLoading ?
    <Loading text={"Loading Feed..."} /> :
    <div className="container">
      {
        visibleIds.map((id, i) => data.get(id) ? <Post key={i} post={data.get(id)} /> :
          <Post key={i} post={Map({url: "loading", title: "loading"})} />
        )
      }
    </div>;

PostsList.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.instanceOf(Map),
  visibleIds: PropTypes.object
};

export default PostsList;
