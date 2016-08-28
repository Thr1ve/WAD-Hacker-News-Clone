import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { nextPage, previousPage, setPage, } from '../actions';
import { getLastPage } from '../reducers';

import PageSelector from '../components/PageSelector';

const PageSelectorContainer = React.createClass({
  render() {
    return (
      <PageSelector
        createClickHandler={this.props.createClickHandler}
        prev={this.props.prev}
        next={this.props.next}
        nPages={this.props.nPages}
        currentPage={this.props.currentPage}
      />
    );
  }
})

function mapDispatchToProps(dispatch) {
  return {
    createClickHandler(pageNumber) {
      return function() {
        dispatch(setPage(pageNumber))
      }
    },
    next() { dispatch(nextPage()) },
    prev() { dispatch(previousPage()) },
  }
}

function mapStateToProps(state) {
  return {
    nPages: getLastPage(state),
    currentPage: state.ui.currentPage
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageSelectorContainer);
