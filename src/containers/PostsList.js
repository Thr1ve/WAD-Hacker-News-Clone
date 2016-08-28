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
    const { isLoading, data, visibleIds } = this.props;
    return <PostsList isLoading={isLoading} data={data} visibleIds={visibleIds} />;
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
