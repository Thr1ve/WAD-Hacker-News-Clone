import React from 'react';
import NavLink from './NavLink';

const Header = ({ createClickHandler, next, prev }) =>
  <nav className="nav">
    <div className="container">
      <div className="nav-left">
        <NavLink to='feed/top'> Top </NavLink>
        <NavLink to='feed/best'> Best </NavLink>
        <NavLink to='feed/new'> New </NavLink>
        <NavLink to='feed/ask'> Ask </NavLink>
        <NavLink to='feed/show'> Show </NavLink>
        <NavLink to='feed/job'> Job </NavLink>
      </div>
    </div>
  </nav>;

export default Header;
