import React, { PropTypes } from 'react';
import { rangeAround } from '../lib';

// NOTE: I want this to end up being an optional prop to the component instead
// of a constant; I'd like to find a way to have the component try
// to calculate this on its own by default.
const MAX_PAGE_SPACE = 7;

const PageSelector = ({ createClickHandler, prev, next, nPages = 1, currentPage = 1 }) =>
  <nav className="nav">
    <div className="pagination container">
      <a onClick={prev} className="button">Previous</a>
      <a onClick={next} className="button">Next</a>
      <ul>
        {
          rangeAround(currentPage, MAX_PAGE_SPACE).map(pageNumber =>
            <li key={pageNumber}>
              <a
                className={`button is-hidden-mobile${pageNumber === currentPage ? ' is-primary' : ''}`}
                onClick={createClickHandler(pageNumber)}
              > {pageNumber} </a>
            </li>
          )
        }
      </ul>
    </div>
  </nav>;

PageSelector.propTypes = {
  createClickHandler: PropTypes.func,
  prev: PropTypes.func,
  next: PropTypes.func,
  nPages: PropTypes.number,
  currentPage: PropTypes.number
}

export default PageSelector;
