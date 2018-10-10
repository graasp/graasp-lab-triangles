import React, { Component } from 'react';
import { Card, Container } from 'reactstrap';
import PropTypes from 'prop-types';
import SimulationButtons from '../components/common/SimulationButtons';
import Dimensions from '../components/forms/Dimensions';

class StudentView extends Component {
  static propTypes = {
    t: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      classOne: 'class-One',
      classTwo: 'class-Two',
      flashed: false,
      colorOne: 'rgb(29,103, 189)',
      colorTwo: 'rgb(29,103, 189)',
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
      classOne, classTwo, flashed, triOne, triTwo, nodeOne,
      nodeTwo, colorOne, colorTwo,
    } = this.state;
    const { t } = this.props;
    return (
      <div className="App">
        <Container className="App-body">
          {t('Welcome to React')}
          <h1 className="text-center mt-5 text-primary">
            {t('online')}&nbsp;
            <strong>
              {t('Triangles')}&nbsp;
            </strong>
            {t('Comparator')}&nbsp;
          </h1>
          <Card body className="mt-5 pt-0">
            <Dimensions triangles={triOne} name="triOne" updateDimensions={this.updateDimensionsOne} node={nodeOne} color={colorOne} clax={classOne} />
            <Dimensions triangles={triTwo} name="triTwo" updateDimensions={this.updateDimensionsTwo} node={nodeTwo} color={colorTwo} clax={classTwo} />
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
