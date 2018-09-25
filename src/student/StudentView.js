import React from 'react';
import { Alert, Card, Container } from 'reactstrap';
import SimulationButtons from '../components/common/SimulationButtons';
import TriangleDimensions from '../components/forms/TriangleDimensions';
import Logo from '../logo.svg';

const StudentView = () => (
  <div className="App">
    <header className="App-header">
      <img src={Logo} className="App-logo" alt="Logo" />
      <h1 className="App-title">Welcome to the Graasp App Starter Kit</h1>
    </header>
    <Container className="App-body">
      <Alert color="info">
        This is the student view. Switch to the teacher view by clicking on the URL below.
        <a href="?mode=teacher">
          <pre>{`${window.location.host}/?mode=teacher`}</pre>
        </a>
      </Alert>

      <Card body>
        <TriangleDimensions />
        <TriangleDimensions />
      </Card>

      <SimulationButtons />
    </Container>
  </div>
);

export default StudentView;
