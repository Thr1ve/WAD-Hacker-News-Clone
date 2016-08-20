import React from 'react';


const Header = ({ onClick }) =>
  <div className="nav">
    <div className="nav-left">
      <div className="nav-item" onClick={onClick('TOP')}>Top</div>
      <div className="nav-item" onClick={onClick('BEST')}>Best</div>
      <div className="nav-item" onClick={onClick('NEW')}>New</div>
      <div className="nav-item" onClick={onClick('ASK')}>Ask</div>
      <div className="nav-item" onClick={onClick('SHOW')}>Show</div>
      <div className="nav-item" onClick={onClick('JOB')}>Job</div>
    </div>
  </div>;

export default Header;
