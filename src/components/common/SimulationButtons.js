import React from 'react';
import { Button, Row } from 'reactstrap';

const SimulationButtons = () => (
  <Row className="pt-5">
    <div className="ml-auto">
      <Button color="primary mr-3">Reset</Button>
      <Button color="outline-secondary">Simulate</Button>
    </div>
  </Row>
);

export default SimulationButtons;
