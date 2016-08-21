import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Post from './Post';

// export unconnected component for testing
export const RawPostsList = ({ isLoading, visibleIds, data }) =>
  isLoading ?
    <div className="container">
      LOADING FEED...
    </div> :
    <div className="container">
      {
        visibleIds.map((id, i) => data[id] ? <Post key={i} post={data[id]} /> :
          <Post key={i} post={{url: "loading", title: "loading"}} />
        )
      }
    </div>;

RawPostsList.propTypes = {
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

export default connect(mapStateToProps)(RawPostsList);
