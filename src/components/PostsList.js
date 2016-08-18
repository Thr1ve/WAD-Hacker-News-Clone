import React from 'react';
import { connect } from 'react-redux';

import { getItem } from '../actions';
import Post from './Post';

const PostsList = React.createClass({
  render() {
    return (
      <div className="container">
        {
          this.props.data.topIds.map((id, i) => {
            if (this.props.data.cachedItems[id]) {
              return <Post key={i} post={this.props.data.cachedItems[id]} />
            }
            return <Post key={i} post={{url: "loading", title: "loading"}} />;
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
