import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.scss';

export const Spinner = props => (
  <div className="Spinner">
    <i className="fas fa-spinner fa-spin fa-4x fa-fw" />
    <div>{props.children}</div>
  </div>
);

Spinner.propTypes = {
  children: PropTypes.string.isRequired,
};

