import React, { Component } from 'react';
import { Alert, Button, Row } from 'reactstrap';

class AngleButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      compare: true,
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }


  handleSimulate = () => {
    console.log('Angle button clicked');
    const { angles: { angleOne, angleTwo } } = this.props;
    console.log('angleOne', angleOne, angleTwo);

    // Getting Triangle ABC angles
    const anga = angleOne.A;
    const angb = angleOne.B;
    const angc = angleOne.C;
    const angaprim = angleTwo.A;
    const angbprim = angleTwo.B;
    const angcprim = angleTwo.C;
    console.log('angaangaanga', anga);
    console.log('angaprimangaprim', angaprim);
    if (anga === angaprim && angb === angbprim && angc === angcprim) {
      console.log('Youpiiii angle A et Aprim sont egaux');
    } else {
      console.log('Ups! Desole, ils sont pas semblables ces angles');
    }
  }

  render() {
    return (
      <Row className="pt-5">
        <div className="ml-auto">
          <Button color="outline-secondary" onClick={this.handleSimulate}>Compare Angles</Button>
        </div>
      </Row>
    );
  }
}

export default AngleButtons;
