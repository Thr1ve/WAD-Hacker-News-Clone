import React, { PropTypes } from 'react';

// We could easily make these separate components if needed, but for now that's overkill
const getTitle = post => !!post.url ? <a href={post.url} target="_blank">{post.title}</a> : post.title;
const getSubtext = post => !!post.url ? post.url : post.text;

const Post = ({ post }) =>
  <div className="media">
    <div className="media-content">
      <p>
        <strong>{getTitle(post)}</strong>
      </p>
      <small>{getSubtext(post)}</small>
    </div>
    {/* <div className="media-right">
      View Comments
    </div> */}
  </div>;

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
