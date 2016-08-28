import React from 'react';
import { connect } from 'react-redux';

import { setPage, } from '../actions';
import { getLastPage } from '../reducers';

import PageSelector from '../components/PageSelector';

const PageSelectorContainer = React.createClass({
  componentWillReceiveProps(nextProps) {
    // TODO: if page from query is greater than nPages, redirect to the last page
    if (this.props.location.query.page !== nextProps.location.query.page) {
      this.props.setPage(Number(nextProps.location.query.page || 1))
    }
  },

  render() {
    return (
      <PageSelector
        route={this.props.location.pathname}
        nPages={this.props.nPages}
        currentPage={Number(this.props.location.query.page || 1)}
      />
    );
  }
});

function mapDispatchToProps(dispatch) {
  return {
    setPage(pageNumber) {
      dispatch(setPage(pageNumber))
    }
  };
}

function mapStateToProps(state) {
  return {
    nPages: getLastPage(state)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageSelectorContainer);
