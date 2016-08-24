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

  initFeedFactory = feedName => () => this.props.dispatch(initFeed(feedName))

  pageGotoFactory = pageNumber => () => this.props.dispatch(setPage(pageNumber))

  next = () => this.props.dispatch(nextPage())

  prev = () => this.props.dispatch(previousPage())

  render() {
    return (
      <div className="hero is-fullheight">
        <div className="hero-head">
          <Header
            createClickHandler={this.initFeedFactory}
          />
        </div>
        <div className="hero-body">
          <PostsList />
        </div>
        <div className="hero-foot">
          <PageSelector
            createClickHandler={this.pageGotoFactory}
            next={this.next}
            prev={this.prev}
            nPages={this.props.nPages}
            currentPage={this.props.currentPage}
          />
        </div>
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
