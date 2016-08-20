import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { initFeed, nextPage, previousPage, setPage, } from './actions';
import { getLastPage } from './reducers';

import PostsList from './components/PostsList';
import PageSelector from './components/PageSelector';
import Header from './components/Header';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(initFeed());
  }

  createInitFeedFactory = () => feedName => () => this.props.dispatch(initFeed(feedName))

  createPageGotoFactory = () => pageNumber => () => this.props.dispatch(setPage(pageNumber))

  next = () => this.props.dispatch(nextPage())

  prev = () => this.props.dispatch(previousPage())

  render() {
    return (
      <div className="container">
        <Header
          createClickHandler={this.createInitFeedFactory()}
        />
        <PostsList />
        <PageSelector
          createClickHandler={this.createPageGotoFactory()}
          next={this.next}
          prev={this.prev}
          nPages={this.props.nPages}
          currentPage={this.props.currentPage}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    nPages: getLastPage(state),
    currentPage: state.ui.currentPage
  };
}

export default connect(mapStateToProps)(App);
