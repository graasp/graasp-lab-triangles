import React, { Component } from 'react';
import { Alert, Button, Row } from 'reactstrap';

class SimulationButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: this.props.coords,
      visible: true,
      success: {
        value1: '',
        value2: '',
        value3: '',
      },
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  handleResetChange = () => {
    const { handleReset } = this.props;
    handleReset(this.state.coords);
  }

  handleSimulate = () => {
    const { triangles: { triOne, triTwo } } = this.props;

    // Getting Triangle ABC coordinates
    const xa = triOne[0].x;
    const xb = triOne[1].x;
    const xc = triOne[2].x;
    const ya = triOne[0].y;
    const yb = triOne[1].y;
    const yc = triOne[2].y;

    // Calculating triangle ABC distances
    // Calculating xAB and yAB
    const dAB = Math.trunc(Math.sqrt((xb - xa) * (xb - xa)))
    + Math.trunc(Math.sqrt((yb - ya) * (yb - ya)));

    // Calculating xAC and yAC
    const dAC = Math.trunc(Math.sqrt((xc - xa) * (xc - xa)))
    + Math.trunc(Math.sqrt((yc - ya) * (yc - ya)));

    // Calculating xBC and yBC
    const dBC = Math.trunc(Math.sqrt((xc - xb) * (xc - xb)))
    + Math.trunc(Math.sqrt((yc - yb) * (yc - yb)));

    // Getting Triangle A`B`C` coordinates
    const xaprim = triTwo[0].x;
    const xbprim = triTwo[1].x;
    const xcprim = triTwo[2].x;
    const yaprim = triTwo[0].y;
    const ybprim = triTwo[1].y;
    const ycprim = triTwo[2].y;

    // Calculating triangle A`B`C` distances
    // Calculating xA`B` and yA`B`
    const dABprim = Math.trunc(Math.sqrt((xbprim - xaprim)
    * (xbprim - xaprim))) + Math.trunc(Math.sqrt(((ybprim - yaprim) * (ybprim - yaprim))));

    // Calculating xAC and yAC
    const dACprim = Math.trunc(Math.sqrt((xcprim - xaprim)
    * (xcprim - xaprim))) + Math.trunc(Math.sqrt((ycprim - yaprim) * (ycprim - yaprim)));

    // Calculating xBC and yBC
    const dBCprim = Math.trunc(Math.sqrt((xcprim - xbprim)
    * (xcprim - xbprim))) + Math.trunc(Math.sqrt((ycprim - ybprim) * (ycprim - ybprim)));
    // Calculation side compareason
    const value1 = Math.trunc(dAB / dABprim);
    const value2 = Math.trunc(dAC / dACprim);
    const value3 = Math.trunc(dBC / dBCprim);
    this.setState({ success: { value1, value2, value3 } });
  }

  handleMessage = (value1, value2, value3) => {
    if ((value1 == value2) == value3) {
      return <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>Youpiii <span>😅</span>! Tri ABC and DEF are seemless</Alert>
    }
    return <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>Ups Sorry <span>🌚</span>! Tri ABC and DEF are not seemless</Alert>
  }

  render() {
    const { success } = this.state;
    const { value1, value2, value3 } = success;
    return (
      <Row className="pt-5">
        {this.handleMessage(value1, value2, value3)}
        <div className="ml-auto">
          <Button color="outline-secondary" onClick={this.handleSimulate}>Compare Sides</Button>
        </div>
      </Row>
    );
  }
}

export default SimulationButtons;
