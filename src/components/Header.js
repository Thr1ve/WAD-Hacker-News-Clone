import React from 'react';

const Header = ({ createClickHandler, next, prev }) =>
  <nav className="nav">
    <div className="container">
      <div className="nav-left">
        <span className="nav-item" >
          <a className="button is-link" onClick={createClickHandler('TOP')}>Top</a>
        </span>
        <span className="nav-item" >
          <a className="button is-link" onClick={createClickHandler('BEST')}>Best</a>
        </span>
        <span className="nav-item" >
          <a className="button is-link" onClick={createClickHandler('NEW')}>New</a>
        </span>
        <span className="nav-item" >
          <a className="button is-link" onClick={createClickHandler('ASK')}>Ask</a>
        </span>
        <span className="nav-item" >
          <a className="button is-link" onClick={createClickHandler('SHOW')}>Show</a>
        </span>
        <span className="nav-item" >
          <a className="button is-link" onClick={createClickHandler('JOB')}>Job</a>
        </span>
      </div>
    </div>
  </nav>

export default Header;
