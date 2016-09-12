import { Map } from 'immutable';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import HTMLContent from './HTMLContent';

// We could easily make these two functions separate components if needed, but for now that's overkill
const getTitle = post => !!post.get('url') ?
  <a href={post.get('url')} target="_blank">{post.get('title')}</a> :
  post.get('title');

const getSubtext = post => !!post.get('url') ? post.get('url') : <HTMLContent html={post.get('text')}/>;

const Post = ({ post }) =>
  <div className="media">
    <div className="media-content">
      <p>
        <strong>{getTitle(post)}</strong>
      </p>
      <small>{getSubtext(post)}</small>
    </div>
    <Link to={`comments/${post.get('id')}`} className="media-right">
      {post.get('descendants')} Comments
    </Link>
  </div>;

Post.propTypes = {
  post: PropTypes.instanceOf(Map)
};

export default Post;
