import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import SimulationButtons from '../components/common/SimulationButtons';
import Dimensions from '../components/forms/Dimensions';

class StudentView extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  state = {
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

  updateDimensionsOne = (coordinates) => {
    this.setState({
      triOne: coordinates,
    });
  };

  updateDimensionsTwo = (coordinates) => {
    this.setState({
      triTwo: coordinates,
    });
  };

  render() {
    const {
      classOne, classTwo, flashed, triOne, triTwo, nodeOne,
      nodeTwo, colorOne, colorTwo,
    } = this.state;
    const { t } = this.props;
    return (
      <div className="App">
        <div className="App-body mx-5">
          <Row>
            <Col>
              <Dimensions t={t} triangles={triOne} name="triOne" updateDimensions={this.updateDimensionsOne} node={nodeOne} color={colorOne} clax={classOne} message />
            </Col>
          </Row>
          <Row>
            <Col>
              <Dimensions t={t} triangles={triTwo} name="triTwo" updateDimensions={this.updateDimensionsTwo} node={nodeTwo} color={colorTwo} clax={classTwo} />
            </Col>
          </Row>
          <Row>
            <Col>
              <SimulationButtons
                t={t}
                triangles={{ triOne, triTwo }}
                flashed={flashed}
              />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default StudentView;
