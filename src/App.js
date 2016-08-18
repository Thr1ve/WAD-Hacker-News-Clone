import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { getTopIds } from './actions';
import PostsList from './components/PostsList';
import Header from './components/Header';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getTopIds());
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <div className="container">
          <Header />
        </div>
        <PostsList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
