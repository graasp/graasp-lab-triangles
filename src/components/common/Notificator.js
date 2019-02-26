import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Notificator = ({ finalResults }) => (
  <div>
    { finalResults.value1 === finalResults.value2 && finalResults.value2 === finalResults.value3
      ? (
        <p className="success-message">
          SUCCESS::This stage is the moment when the LH and FSH are in normal quatity.
          <br />
          This is the period before ovulation
        </p>
      )
      : (
        <p className="failure-message">
          FAILURE::This stage is the moment when the LH and FSH are in normal quatity.
          <br />
          This is the period before ovulation
        </p>
      )
    }
  </div>
);

Notificator.propTypes = {
  finalResults: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  finalResults: state.simulation.finalResults,
});

const ConnectedComponent = connect(mapStateToProps)(Notificator);

export default ConnectedComponent;
