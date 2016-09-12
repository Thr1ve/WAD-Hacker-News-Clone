import { Map } from 'immutable';
import React, { PropTypes } from 'react';
import HTMLContent from './HTMLContent';

const ThreadBranch = ({ item, children }) =>
  <div className="box">
    <div className="content">
      <br />
      <strong>{item.get('by')}</strong> says:
      <br />
      <HTMLContent html={item.get('text')}/>
      <small>ID:</small> {item.get('id')}
    </div>
    {item.get('collapsed') ? '' : children}
  </div>;

ThreadBranch.propTypes = {
  item: PropTypes.instanceOf(Map)
};

export default ThreadBranch;
