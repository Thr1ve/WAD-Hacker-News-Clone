import React from 'react';
import HTMLContent from './HTMLContent';

const ThreadBranch = ({ id = '', text = '', children, collapsed = false }) =>
  <div className="box">
    <div className="content">
        <p>
          <strong>ID:</strong> {id}
          <br />
          <HTMLContent html={text}/>
        </p>
    </div>
    {collapsed ? '' : children}
  </div>;

export default ThreadBranch;
