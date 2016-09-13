import React from 'react';
import { connect } from 'react-redux';

import { initFeed } from '../actions';
import PostsList from '../components/PostsList';
import Loading from './Loading.js';

const PostsListContainer = React.createClass({
  componentWillReceiveProps(nextProps) {
    if (this.props.params.feedName !== nextProps.params.feedName) {
      this.props.initFeed(nextProps.params.feedName);
    }
  },

  componentDidMount() {
    this.props.initFeed(this.props.params.feedName, this.props.location.query.page);
  },

  render() {
    const { isLoading, data, visibleIds } = this.props;
    return isLoading ?
      <Loading text={"Loading Feed..."} /> :
      <PostsList data={data} visibleIds={visibleIds} />;
  }
})

function mapDispatchToProps(dispatch) {
  return {
    initFeed(feedName, pageNumber) {
      dispatch(initFeed(feedName, pageNumber))
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.data.get('loading'),
    data: state.data.get('cachedItems'),
    visibleIds: state.ui.feed.get('visibleItemIds')
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);
