import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ func, wording }) => (
  <button type="button" onClick={func}>
    {wording}
  </button>
);

Button.propTypes = {
  func: PropTypes.func.isRequired,
  wording: PropTypes.string.isRequired,
};

export default Button;
