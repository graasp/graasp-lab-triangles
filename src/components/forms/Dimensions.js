import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button, CardTitle, Col, Row,
} from 'reactstrap';
import { Stage } from 'react-konva';
import Tri from '../preview/Tri';
import FormViews from './FormViews';

class Dimensions extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    updateDimensions: PropTypes.func.isRequired,
    node: PropTypes.shape({
      A: PropTypes.string.isRequired,
      B: PropTypes.string.isRequired,
      C: PropTypes.string.isRequired,
    }).isRequired,
    clax: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    triangles: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    })).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      points: props.triangles,
    };
    this.handlePChange = this.handlePChange.bind(this);
  }

  handleShiftRight = () => {
    const { points } = this.state;
    const newPoints = [...points];

    const reachedLimit = newPoints.some(point => point.x > 450);
    if (!reachedLimit) {
      newPoints.forEach((point) => {
        // eslint-disable-next-line no-param-reassign
        point.x += 20;
      });
      this.handlePChange(newPoints);
    }
  }

  handleShiftLeft = () => {
    const { points } = this.state;
    const newPoints = [...points];
    const reachedLimit = newPoints.some(point => point.x < 20);
    if (!reachedLimit) {
      // eslint-disable-next-line no-param-reassign
      newPoints.forEach((point) => { point.x -= 20; });
      this.handlePChange(newPoints);
    }
  }

  handleRotate = (event) => {
    const { points } = this.state;
    const newPoints = [...points];
    const Ox = (newPoints[0].x + newPoints[1].x + newPoints[2].x) / 3;
    const Oy = (newPoints[0].y + newPoints[1].y + newPoints[2].y) / 3;
    const radians = event.target.dataset.rotate === 'right' ? (Math.PI / 180) * 90 : (Math.PI / 180) * (-90);
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);

    newPoints.forEach((point) => {
      const nx = (cos * (point.x - Ox)) + (sin * (point.y - Oy)) + Ox;
      const ny = (cos * (point.y - Oy)) - (sin * (point.x - Ox)) + Oy;
      // eslint-disable-next-line no-param-reassign
      point.x = Math.round(nx);
      // eslint-disable-next-line no-param-reassign
      point.y = Math.round(ny);
    });
    this.handlePChange(newPoints);
  }

  handlePChange(coordinates) {
    const { updateDimensions } = this.props;
    this.setState({ points: coordinates });
    updateDimensions(coordinates);
  }

  render() {
    const { points } = this.state;
    const {
      node, color, clax, t,
    } = this.props;
    return (
      <Row>
        <Col md="6" className="right-border pt-4">
          <CardTitle>
            <span>
              {t('triangle')}&nbsp;
              <strong>{`${node.A}${node.B}${node.C}`}</strong>
              &nbsp;
              {t('coordinates')}
            </span>
          </CardTitle>
          <FormViews
            handlePChange={this.handlePChange}
            node={node}
            points={points}
            t={t}
          />
        </Col>

        <Stage width="450" height="300" className="border-top">
          <Tri
            points={
              [
                { x: points[0].x, y: points[0].y },
                { x: points[1].x, y: points[1].y },
                { x: points[2].x, y: points[2].y },
              ]
            }
            color={color}
            node={node}
          />
        </Stage>
        <div className={clax}>
          <Button color="success" size="sm" onClick={this.handleShiftLeft}>
            {t('shift')}
            L
          </Button>
          <Button color="outline-warning" size="sm" className="ml-3 mr-3" onClick={this.handleRotate} data-rotate="left">
            {t('rotate')}
            L
          </Button>
          <Button color="outline-warning" size="sm" className="ml-3 mr-3" onClick={this.handleRotate} data-rotate="right">
            {t('rotate')}
            R
          </Button>
          <Button color="success" size="sm" onClick={this.handleShiftRight}>
            {t('shift')}
            R
          </Button>
        </div>
      </Row>
    );
  }
}

export default Dimensions;
