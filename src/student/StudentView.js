import React, { Component } from 'react';
import { Alert, Card, Container } from 'reactstrap';
import AngleButtons from '../components/common/AngleButtons';
import SimulationButtons from '../components/common/SimulationButtons';
import Dimensions from '../components/forms/Dimensions';
import Logo from '../logo.svg';

class StudentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorOne: 'blue',
      colorTwo: 'red',
      angleOne: {
        A: 30,
        B: 60,
        C: 90,
      },
      angleTwo: {
        A: 20,
        B: 80,
        C: 80,
      },
      triOne: [
        { x: 50, y: 50 },
        { x: 200, y: 100 },
        { x: 100, y: 150 },
      ],
      triTwo: [
        { x: 50, y: 50 },
        { x: 200, y: 100 },
        { x: 100, y: 150 },
      ],
      nodeOne: {
        A: 'A',
        B: 'B',
        C: 'C',
      },
      nodeTwo: {
        A: 'D',
        B: 'E',
        C: 'F',
      },
    };

    this.updateDimensionsOne = this.updateDimensionsOne.bind(this);
    this.updateDimensionsTwo = this.updateDimensionsTwo.bind(this);
  }

  updateDimensionsOne(coordinates) {
    this.setState({
      triOne: coordinates,
    });
  }

  updateDimensionsTwo(coordinates) {
    this.setState({
      triTwo: coordinates,
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
            <Dimensions name="triOne" updateDimensions={this.updateDimensionsOne} node={this.state.nodeOne} color={this.state.colorOne} />
            <Dimensions name="triTwo" updateDimensions={this.updateDimensionsTwo} node={this.state.nodeTwo} color={this.state.colorTwo} />
          </Card>
          <SimulationButtons
            triangles={{ triOne: this.state.triOne, triTwo: this.state.triTwo }}
          />
          <AngleButtons
            angles={{ angleOne: this.state.angleOne, angleTwo: this.state.angleTwo }}
          />
        </Container>
      </div>
    );
  }
}

export default StudentView;
