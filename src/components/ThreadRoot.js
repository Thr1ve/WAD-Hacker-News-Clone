import { Map } from 'immutable';
import React, { PropTypes } from 'react';

const ThreadRoot = ({ item, children }) =>
  <div className="box">
    <strong>{item.get('title')}</strong>
    <br />
    <p>{item.get('text')}</p>
    <br />
    {children}
  </div>;

ThreadRoot.propTypes = {
  item: PropTypes.instanceOf(Map)
};

export default ThreadRoot;
