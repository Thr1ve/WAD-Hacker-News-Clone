import React, { PropTypes } from 'react';

const Loading = ({ text }) =>
  <div className="container has-text-centered">
    <h1 className="title">
      {text}
    </h1>
  </div>;

Loading.propTypes = {
  text: PropTypes.string.isRequired
};

export default Loading;
