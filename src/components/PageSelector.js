import React, { PropTypes } from 'react';
import { rangeAround } from '../lib';
import { Link } from 'react-router';

// NOTE: I want this to end up being an optional prop to the component instead
// of a constant; I'd like to find a way to have the component try
// to calculate this on its own by default.
const MAX_PAGE_SPACE = 7;

const safePrev = currentPage => currentPage <= 2 ? 1 : currentPage - 1;
const safeNext = (currentPage, nPages) => currentPage < nPages ? currentPage + 1 : nPages;

const PageSelector = ({ route, nPages = 1, currentPage = 1 }) =>
  <nav className="nav">
    <div className="pagination container">
      <Link to={route} query={{page: safePrev(currentPage)}} className="button"> Previous </Link>
      <Link to={route} query={{page: safeNext(currentPage, nPages)}} className="button"> Next </Link>
      <ul>
        {
          rangeAround(currentPage, MAX_PAGE_SPACE).map((pageNumber, i) =>
            <li key={i}>
              <Link
                to={route}
                query={{ page: pageNumber }}
                className={`button is-hidden-mobile${pageNumber === currentPage ? ' is-primary' : ''}`}
              > {pageNumber} </Link>
            </li>
          )
        }
      </ul>
    </div>
  </nav>;

PageSelector.propTypes = {
  route: PropTypes.string,
  nPages: PropTypes.number,
  currentPage: PropTypes.number
}

export default PageSelector;
