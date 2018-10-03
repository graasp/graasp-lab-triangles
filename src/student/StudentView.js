import React, { Component } from 'react';
import { Card, Container } from 'reactstrap';
import SimulationButtons from '../components/common/SimulationButtons';
import Dimensions from '../components/forms/Dimensions';

class StudentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorOne: 'blue',
      colorTwo: 'red',
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
    const {
      triOne, triTwo, nodeOne,
      nodeTwo, colorOne, colorTwo,
    } = this.state;
    return (
      <div className="App">
        <Container className="App-body">
          <Card body className="bg-info mt-5">
            <Dimensions name="triOne" updateDimensions={this.updateDimensionsOne} node={nodeOne} color={colorOne} />
            <Dimensions name="triTwo" updateDimensions={this.updateDimensionsTwo} node={nodeTwo} color={colorTwo} />
          </Card>
          <SimulationButtons
            triangles={{ triOne: triOne, triTwo: triTwo }}
          />
        </Container>
      </div>
    );
  }
}

export default StudentView;
