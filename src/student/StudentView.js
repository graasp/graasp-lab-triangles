import React, { Component } from 'react';
import { Alert, Card, Container } from 'reactstrap';
import SimulationButtons from '../components/common/SimulationButtons';
import Dimensions from '../components/forms/Dimensions';
import Logo from '../logo.svg';

class StudentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: [
        { x: 50, y: 50 },
        { x: 200, y: 100 },
        { x: 100, y: 150 },
      ],
    };

    this.updateDimensions1 = this.updateDimensions1.bind(this);
    this.updateDimensions2 = this.updateDimensions2.bind(this);
  }

  updateDimensions1(coordinates) {
    this.setState({
      coords1: coordinates
    });
  }

  updateDimensions2(coordinates) {
    this.setState({
      coords2: coordinates,
    });
  }

  render() {
    return (
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
            <Dimensions name="tri1" updateDimensions={this.updateDimensions1} />
            <Dimensions name="tri2" updateDimensions={this.updateDimensions2} />
          </Card>
          <SimulationButtons sets={{
            coords1: this.state.coords1,
            coords2: this.state.coords2
          }}/>
        </Container>
      </div>
    );
  }
}

export default StudentView;
