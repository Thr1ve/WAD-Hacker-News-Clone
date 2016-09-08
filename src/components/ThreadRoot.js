import React from 'react';

const ThreadRoot = ({ id, title = 'loading...', text = 'loading', children }) =>
  <div className="box">
    <strong>{title}</strong>
    <br />
    <p>{text}</p>
    <br />
    {children}
  </div>;

export default ThreadRoot;
