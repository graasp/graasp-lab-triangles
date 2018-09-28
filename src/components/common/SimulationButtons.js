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
    const { sets: {triA, triB} } = this.props;
    console.log(triA, triB);

    // Getting Triangle ABC coordinates
    const xa = triA[0].x;
    const xb = triA[1].x;
    const xc = triA[2].x;
    const ya = triA[0].y;
    const yb = triA[1].y;
    const yc = triA[2].y;

    // Calculating triangle ABC distances
    // Calculating xAB and yAB
    const dAB = Math.trunc(Math.sqrt(xb - xa)) + Math.trunc(Math.sqrt(yb - ya));
    console.log('dAb', dAB);

    // Calculating xAC and yAC
    const dAC = Math.trunc(Math.sqrt(xc - xa)) + Math.trunc(Math.sqrt(yc - ya));

    // Calculating xBC and yBC
    const dBC = Math.trunc(Math.sqrt(xc - xb)) + Math.trunc(Math.sqrt(yc - yb));

    // Getting Triangle A`B`C` coordinates
    const xaprim = triB[0].x;
    const xbprim = triB[1].x;
    const xcprim = triB[2].x;
    const yaprim = triB[0].y;
    const ybprim = triB[1].y;
    const ycprim = triB[2].y;

    // Calculating triangle A`B`C` distances
    // Calculating xA`B` and yA`B`
    const dABprim = Math.trunc(Math.sqrt(xbprim - xaprim)) + Math.trunc(Math.sqrt(ybprim - yaprim));
    console.log('dABprim', dABprim);

    // Calculating xAC and yAC
    const dACprim = Math.trunc(Math.sqrt(xcprim - xaprim)) + Math.trunc(Math.sqrt(ycprim - yaprim));

    // Calculating xBC and yBC
    const dBCprim = Math.trunc(Math.sqrt(xcprim - xbprim)) + Math.trunc(Math.sqrt(ycprim - ybprim));

    // Calculation side compareason
    const val = dAB / dABprim;
    const val1 = dAC / dACprim;
    const val2 = dBC / dBCprim;
    console.log('val', val, val1, val2);

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
