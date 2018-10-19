import React, { Component } from 'react';
import { Button, Card } from 'reactstrap';
import PropTypes from 'prop-types';
import SimulationButtons from '../components/common/SimulationButtons';
import Dimensions from '../components/forms/Dimensions';

class StudentView extends Component {
  static propTypes = {
    i18n: PropTypes.shape({}).isRequired,
    t: PropTypes.func.isRequired,
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
    const { i18n, t } = this.props;
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
      <div className="App">
        <div className="App-body mx-5">
          <Button onClick={() => changeLanguage('fr')} className="btn btn-outline-primary">Fr</Button>
          <Button onClick={() => changeLanguage('en')} className="btn btn-outline-primary ml-2">En</Button>
          <Card body className="mt-5 p-0 border-0">
            <h5 className="text-right">{t('drag')}</h5>
            <Dimensions t={t} triangles={triOne} name="triOne" updateDimensions={this.updateDimensionsOne} node={nodeOne} color={colorOne} clax={classOne} />
            <Dimensions t={t} triangles={triTwo} name="triTwo" updateDimensions={this.updateDimensionsTwo} node={nodeTwo} color={colorTwo} clax={classTwo} />
            <SimulationButtons
              t={t}
              triangles={{ triOne, triTwo }}
              flashed={flashed}
            />
          </Card>
        </div>
      </div>
    );
  }
}

export default StudentView;
