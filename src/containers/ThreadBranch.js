import { Map } from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { initThread } from '../actions';
import { getCachedItem } from '../reducers';

import ThreadBranch from '../components/ThreadBranch';
import ThreadBranchContainer from './ThreadBranch';

const _ThreadBranchContainer = React.createClass({
  render() {
    const { item } = this.props;
    return (
      <ThreadBranch item={item}>
        {
          item.has('kids') &&
          item.get('kids').map((itemId, i) => <ThreadBranchContainer key={i} id={itemId} />)
        }
      </ThreadBranch>
    );
  }
});

_ThreadBranchContainer.propTypes = {
  id: PropTypes.number.isRequired,
  item: PropTypes.instanceOf(Map)
};

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  return {
    item: getCachedItem(state, id) || Map({}),
  };
};

export default connect(mapStateToProps, { initThread })(_ThreadBranchContainer);
