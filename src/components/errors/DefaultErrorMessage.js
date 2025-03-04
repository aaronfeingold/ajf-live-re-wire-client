import React from 'react';
import PropTypes from 'prop-types';
import { ErrorTypes } from '../../constants/errors';
import './DefaultErrorMessage.module.css';

const headline =
  "Unfortunately, today's events cannot be displayed at this time.";

const DefaultErrorMessage = ({ error }) => {
  const message =
    error?.message || error?.toString() || 'An unexpected error occurred';
  const code = error?.code || 500;
  const type = error?.type || ErrorTypes.UNKNOWN_ERROR;

  const getAlertClass = (errorType) => {
    switch (errorType) {
      case ErrorTypes.HTTP_ERROR:
        return 'danger';
      case ErrorTypes.VALUE_ERROR:
      case ErrorTypes.GENERAL_ERROR:
        return 'warning';
      case ErrorTypes.UNKNOWN_ERROR:
        return 'info';
      default:
        return 'info';
    }
  };

  const alertClass = getAlertClass(type);

  const getIcon = (typeName) => {
    switch (typeName) {
      case 'warning':
        return '&#9888;'; // Warning sign
      case 'error':
      case 'danger':
        return '&#9940;'; //  Cross mark in a circle
      case 'info':
        return '&#8505;'; // Info sign
      default:
        // give a warning sign, idk the problem bruh
        return '&#9888;';
    }
  };

  return (
    <div className="container py-4 error-container rounded">
      <div
        className={`alert alert-${alertClass} shadow-sm fade show`}
        role="alert"
      >
        <div className="d-flex align-items-start">
          <div
            className="flex-shrink-0 me-3 fs-4 .error-icon"
            dangerouslySetInnerHTML={{ __html: getIcon(alertClass) }}
          ></div>
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between mb-2">
              <h5 className="alert-heading mb-0">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </h5>
              {code && <span className="fs-6 text-dark">Code: {code}</span>}
            </div>
            <p className="mb-0 fs-5">{headline}</p>
            <p className="mb-0 fs-5 fw-bold text-danger">
              Error Message: {message}
            </p>
            {code >= 500 && (
              <p className="mb-0 fs-6 text-muted">
                The server may be experiencing technical difficulties. Please
                try again later.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

DefaultErrorMessage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Error),
    PropTypes.shape({
      message: PropTypes.string,
      code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      type: PropTypes.oneOf(Object.values(ErrorTypes)),
    }),
  ]).isRequired,
};

export default DefaultErrorMessage;
