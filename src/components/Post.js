import React, { PropTypes } from 'react';

const createMarkup = html => ({ __html: html });

// We could easily make these two functions separate components if needed, but for now that's overkill
// NOTE: We are relying on HN API to provide safe markup for now. It's trustworthy in
// my opinion, but I'd still rather not be doing this. Is there a simple way to avoid?
const getTitle = post => !!post.url ? <a href={post.url} target="_blank">{post.title}</a> : post.title;
const getSubtext = post => !!post.url ? post.url :
  <div className="content" dangerouslySetInnerHTML={createMarkup(post.text)} />;

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
