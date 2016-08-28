import React, { Component } from 'react';

import Header from './components/Header';

const App  = ({ body, footer }) =>
  <div className="hero is-fullheight">
    <div className="hero-head">
      <Header />
    </div>
    <div className="hero-body">
      {body}
    </div>
    <div className="hero-foot">
      {footer}
    </div>
  </div>;

export default App;
