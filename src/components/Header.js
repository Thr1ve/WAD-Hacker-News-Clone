import React from 'react';

const Header = ({ createClickHandler, next, prev }) =>
  <div className="container">
    <div className="nav">
      <div className="nav-left">
        <div className="nav-item" onClick={createClickHandler('TOP')}>Top</div>
        <div className="nav-item" onClick={createClickHandler('BEST')}>Best</div>
        <div className="nav-item" onClick={createClickHandler('NEW')}>New</div>
        <div className="nav-item" onClick={createClickHandler('ASK')}>Ask</div>
        <div className="nav-item" onClick={createClickHandler('SHOW')}>Show</div>
        <div className="nav-item" onClick={createClickHandler('JOB')}>Job</div>
      </div>
    </div>
  </div>;

export default Header;
