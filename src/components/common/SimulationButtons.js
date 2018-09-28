import React, { Component } from 'react';
import { Button, Row } from 'reactstrap';
class SimulationButtons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coords: this.props.coords
    };
  }

  handleResetChange = () => {
    const { handleReset } = this.props;
    handleReset(this.state.coords);
  }

  handleSimulate = () => {
    const { sets: {coords1, coords2} } = this.props;
    console.log(coords1, coords2);
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
