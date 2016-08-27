import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const NavLink = ({ to, children }) =>
  <span className="nav-item">
    <Link className="button is-link" to={to} activeClassName="active"> {children} </Link>
  </span>;

export default NavLink;
