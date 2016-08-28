import React from 'react';
import { connect } from 'react-redux';

import { initFeed } from '../actions';
import PostsList from '../components/PostsList';

const PostsListContainer = React.createClass({
  componentWillReceiveProps(nextProps) {
    if (this.props.params.feedName !== nextProps.params.feedName) {
      this.props.initFeed(nextProps.params.feedName);
    }
  },

  componentDidMount() {
      this.props.initFeed(this.props.params.feedName);
  },

  render() {
    return (
      <PostsList
        isLoading={this.props.isLoading}
        data={this.props.data}
        visibleIds={this.props.visibleIds}
      />
    );
  }
})

function mapDispatchToProps(dispatch) {
  return {
    initFeed(feedName) { dispatch(initFeed(feedName)) }
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.data.loading,
    data: state.data.cachedItems,
    visibleIds: state.ui.visibleItemIds
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);
