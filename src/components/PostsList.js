import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Post from './Post';

const PostsList = React.createClass({
  render() {
    return (
      this.props.isLoading ?
        <div className="container">
          LOADING FEED...
        </div> :
        <div className="container">
          {
            this.props.visibleIds.map((id, i) => {
              if (this.props.data[id]) {
                return <Post key={i} post={this.props.data[id]} />
              }
              return <Post key={i} post={{url: "loading", title: "loading"}} />;
            })
          }
        </div>
    );
  }
});

PostsList.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.object,
  visibleIds: PropTypes.array
};

function mapStateToProps(state) {
  return {
    isLoading: state.data.loading,
    data: state.data.cachedItems,
    visibleIds: state.ui.visibleItemIds
  };
}

export default connect(mapStateToProps)(PostsList);
