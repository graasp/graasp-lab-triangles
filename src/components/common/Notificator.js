import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';

const Notificator = ({ finalResults, t }) => (
  <div>
    { finalResults.value1 === finalResults.value2 && finalResults.value2 === finalResults.value3
      ? (
        <p className="success-message">
          <span
            aria-label="Success emoji"
            role="img"
            className="notification-badge"
          >
            😅
          </span>
          <br />
          {t('Success message')}
        </p>
      )
      : (
        <p className="failure-message">
          <span
            aria-label="Failure emoji"
            role="img"
            className="notification-badge"
          >
            😥
          </span>
          <br />
          {t('Failure message')}
        </p>
      )
    }
  </div>
);

Notificator.propTypes = {
  finalResults: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  finalResults: state.simulation.finalResults,
});

const ConnectedComponent = connect(mapStateToProps)(Notificator);

export default withTranslation()(ConnectedComponent);
