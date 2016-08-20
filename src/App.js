import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { initFeed } from './actions';
import PostsList from './components/PostsList';
import Header from './components/Header';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(initFeed());
  }

  createHandler = () => feedName => () => {
    this.props.dispatch(initFeed(feedName));
  }

  render() {
    return (
      <div className="container">
        <Header createClickHandler={this.createHandler()}/>
        <PostsList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
