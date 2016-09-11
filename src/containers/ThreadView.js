import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { initThreadRoot } from '../actions';
import { getKids } from '../reducers';

import ThreadRoot from '../components/ThreadRoot';
import ThreadBranch from '../containers/ThreadBranch';

const ThreadView = React.createClass({
  componentDidMount() {
    this.props.initThreadRoot(this.props.params.itemId);
  },

  render() {
    const { data, kids } = this.props;
    return (
      <ThreadRoot {...data}>
        {kids.map((id, i) => <ThreadBranch key={i} id={id} />)}
      </ThreadRoot>
    );
  }
});

ThreadView.propTypes = {
  params: PropTypes.shape({
    itemId: PropTypes.string.isRequired
  })
};

function mapStateToProps(state, ownProps) {
  const { params: { itemId } } = ownProps;
  return {
    data: state.data.getIn(['cachedItems', itemId]) || { itemId },
    kids: getKids(state, itemId)
  };
}

export default connect(mapStateToProps, { initThreadRoot })(ThreadView)
