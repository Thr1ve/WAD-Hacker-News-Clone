import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { initThread } from '../actions';
import { getKids } from '../reducers';

import ThreadBranch from '../components/ThreadBranch';
import ThreadBranchContainer from './ThreadBranch';

const _ThreadBranchContainer = React.createClass({
  getDefaultProps() {
    return {
      kids: []
    };
  },

  componentDidMount() {
    this.props.initThread(this.props.id);
  },

  render() {
    const { data, kids } = this.props;
    return (
      <ThreadBranch {...data}>
        {kids.map((itemId, i) => <ThreadBranchContainer key={i} id={itemId} />)}
      </ThreadBranch>
    );
  }
});

_ThreadBranchContainer.propTypes = {
  id: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const { cachedItems } = state.data;
  return {
    data: cachedItems[id] || { id },
    kids: getKids(state, id)
  };
};

export default connect(mapStateToProps, { initThread })(_ThreadBranchContainer);
