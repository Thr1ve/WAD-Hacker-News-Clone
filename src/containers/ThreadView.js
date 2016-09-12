import { Map } from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { initThreadRoot } from '../actions';
import { getCachedItem } from '../reducers';

import ThreadRoot from '../components/ThreadRoot';
import ThreadBranch from '../containers/ThreadBranch';

const ThreadView = React.createClass({
  componentDidMount() {
    this.props.initThreadRoot(this.props.params.itemId);
  },

  render() {
    const { item } = this.props;
    return (
      <ThreadRoot item={item}>
        {
          item.has('kids') &&
          item.get('kids').map((id, i) => <ThreadBranch key={i} id={id} />)
        }
      </ThreadRoot>
    );
  }
});

ThreadView.propTypes = {
  params: PropTypes.shape({
    itemId: PropTypes.string.isRequired
  }),
  item: PropTypes.instanceOf(Map)
};

function mapStateToProps(state, ownProps) {
  const { params: { itemId } } = ownProps;
  return {
    item: getCachedItem(state, itemId),
  };
}

export default connect(mapStateToProps, { initThreadRoot })(ThreadView)
