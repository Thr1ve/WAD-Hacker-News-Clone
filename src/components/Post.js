import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import HTMLContent from './HTMLContent';

// We could easily make these two functions separate components if needed, but for now that's overkill
const getTitle = post => !!post.url ? <a href={post.url} target="_blank">{post.title}</a> : post.title;
const getSubtext = post => !!post.url ? post.url : <HTMLContent html={post.text}/>;

const Post = ({ post }) =>
  <div className="media">
    <div className="media-content">
      <p>
        <strong>{getTitle(post)}</strong>
      </p>
      <small>{getSubtext(post)}</small>
    </div>
    <Link to={`comments/${post.id}`} className="media-right">
      Comments
    </Link>
  </div>;

Post.propTypes = {
  post: PropTypes.object
};

export default Post;
