import React from 'react';
import { connect } from 'react-redux';

import Post from './Post';

const PostsList = React.createClass({
  render() {
    return (
      <div className="container">
        {
          this.props.data.posts.map((post, i) => {
            return <Post key={i} post={post} />
          })
        }
      </div>
    )
  }
});

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(PostsList);
