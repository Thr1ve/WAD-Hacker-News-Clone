import React, { PropTypes } from 'react';

const Post = ({ post }) =>
  <div className="media">
    <div className="media-content">
      <p>
        <strong><a href={post.url} target="_blank">{post.title}</a></strong>
      </p>
      <small>{post.url}</small>
    </div>
    {/* <div className="media-right">
      View Comments
    </div> */}
  </div>;

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
