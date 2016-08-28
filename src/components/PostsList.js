import React, { PropTypes } from 'react';

import Post from './Post';

const PostsList = ({ isLoading, visibleIds, data }) =>
  isLoading ?
    <div className="container has-text-centered">
      <h1 className="title">
        Loading Feed...
      </h1>
    </div> :
    <div className="container">
      {
        visibleIds.map((id, i) => data[id] ? <Post key={i} post={data[id]} /> :
          <Post key={i} post={{url: "loading", title: "loading"}} />
        )
      }
    </div>;

PostsList.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.object,
  visibleIds: PropTypes.array
};

export default PostsList;
