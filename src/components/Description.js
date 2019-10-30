import React from 'react';
import PropTypes from 'prop-types';
import './Description.css';

const Description = ({ t }) => (
  <div className="description-component">
    <h2>{t('Description')}</h2>
    <p>
      {t('Lab Explanation')}
    </p>
  </div>
);

Description.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Description;
