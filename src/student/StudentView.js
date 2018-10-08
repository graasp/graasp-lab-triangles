import React, { Component } from 'react';
import { Card, Container } from 'reactstrap';
import SimulationButtons from '../components/common/SimulationButtons';
import Dimensions from '../components/forms/Dimensions';

class StudentView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flashed: false,
      colorOne: 'blue',
      colorTwo: '#FD9735',
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
      flashed, triOne, triTwo, nodeOne,
      nodeTwo, colorOne, colorTwo,
    } = this.state;
    return (
      <div className="App">
        <Container className="App-body">
          <h1 className="text-center mt-5 text-primary">
            Online&nbsp;
            <strong>
              Triangles&nbsp;
            </strong>
            Comparator&nbsp;
          </h1>
          <Card body className="bg-secondary mt-5 pt-0">
            <Dimensions name="triOne" updateDimensions={this.updateDimensionsOne} node={nodeOne} color={colorOne} />
            <Dimensions name="triTwo" updateDimensions={this.updateDimensionsTwo} node={nodeTwo} color={colorTwo} />
            <SimulationButtons
              triangles={{ triOne, triTwo }}
              flashed={flashed}
            />
          </Card>
        </Container>
      </div>
    );
  }
}

export default StudentView;
