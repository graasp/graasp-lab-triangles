import React from 'react';
import { Alert, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Logo from '../logo.svg';

const TeacherView = ({ t }) => (
  <div className="App">
    <header className="App-header">
      <img src={Logo} className="App-logo" alt="Logo" />
      <h1 className="App-title">{t('welcome')}</h1>
    </header>
    <Container className="App-body">
      <Alert color="primary">
        {t('teacherView')}
        <a href="?mode=student">
          <pre>{`${window.location.host}/?mode=student`}</pre>
        </a>
      </Alert>
    </Container>
  </div>
);

TeacherView.propTypes = {
  t: PropTypes.func.isRequired,
};

export default TeacherView;
