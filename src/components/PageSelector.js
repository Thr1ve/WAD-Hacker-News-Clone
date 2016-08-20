import React, { PropTypes } from 'react';

const PageSelector = ({ createClickHandler, prev, next, nPages=1, currentPage=1 }) =>
  <nav className="pagination">
    <a onClick={prev} className="button">Previous</a>
    <a onClick={next} className="button">Next page</a>
    <ul>
      {
        Array.from({ length: nPages }, (v, i) => i + 1).map(pageNumber =>
          <li key={pageNumber}>
            <a
              className={`button${ pageNumber === currentPage ? ' is-primary' : ''}`}
              onClick={createClickHandler(pageNumber)}
            />
          </li>
        )
      }
    </ul>
  </nav>;

PageSelector.propTypes = {
  createClickHandler: PropTypes.func,
  prev: PropTypes.func,
  next: PropTypes.func,
  nPages: PropTypes.number,
  currentPage: PropTypes.number
}

export default PageSelector;
