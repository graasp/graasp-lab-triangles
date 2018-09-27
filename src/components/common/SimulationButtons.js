import React, { Component } from 'react';
import { Button, Row } from 'reactstrap';
import PropTypes from 'prop-types';
class SimulationButtons extends Component {
  static propTypes = {
    handleReset: PropTypes.func.isRequired,
  }

  handleResetChange = () => {
    console.log('this is the Reset button:', this);
    const { handleReset } = this.props;
    const coords = [{ x: 50000, y: 40 }, { x: 200, y: 100 }, { x: 100, y: 150 }];
    handleReset(coords);
  }

  handleSimulate = () => {
    console.log('this is is The Simulation button:', this);
  }

  render() {
    return (
      <Row className="pt-5">
        <div className="ml-auto">
          <Button color="primary mr-3" onClick={this.handleResetChange}>Reset</Button>
          <Button color="outline-secondary" onClick={this.handleSimulate}>Simulate</Button>
        </div>
      </Row>
    );
  }
}

export default SimulationButtons;
