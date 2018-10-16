import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button, CardTitle, Col, Row,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line
import { faCoffee } from '@fortawesome/fontawesome-free-solid';
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

    const reachedLimit = newPoints.some(point => point.x > 410);
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
      if (Math.round(nx) < 1 || Math.round(ny) > 420) {
        return;
      }
      // eslint-disable-next-line no-param-reassign
      point.x = Math.round(nx);
      // eslint-disable-next-line no-param-reassign
      point.y = Math.round(ny);
    });
    this.handlePChange(newPoints);
  }

  handleDragMove = (e) => {
    const { points } = this.state;
    const newPoints = [...points];
    if (e.target.x() >= 1 && e.target.x() <= 435) {
      newPoints[0].x = e.target.x();
    }
    if (e.target.y() >= 30 && e.target.y() <= 435) {
      newPoints[0].y = e.target.y();
    }
    this.handlePChange(newPoints);
  };

  handleDragMoveOne = (e) => {
    const { points } = this.state;
    const newPoints = [...points];
    if (e.target.x() >= 1 && e.target.x() <= 435) {
      newPoints[1].x = e.target.x();
    }
    if (e.target.y() >= 30 && e.target.y() <= 435) {
      newPoints[1].y = e.target.y();
    }
    this.handlePChange(newPoints);
  };

  handleDragMoveTwo = (e) => {
    const { points } = this.state;
    const newPoints = [...points];
    if (e.target.x() >= 1 && e.target.x() <= 435) {
      newPoints[2].x = e.target.x();
    }
    if (e.target.y() >= 30 && e.target.y() <= 435) {
      newPoints[2].y = e.target.y();
    }
    this.handlePChange(newPoints);
  };

  handlePChange(coordinates) {
    const { updateDimensions } = this.props;
    this.setState({ points: coordinates });
    updateDimensions(coordinates);
  }

  render() {
    const { points } = this.state;
    const {
      flashed, node, color, clax, t,
    } = this.props;

    return (
      <Row className="relative">
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
            flashed={flashed}
          />
        </Col>
        <Col md="6" className="pt-4">
          <div className={clax}>
            <Button size="sm" onClick={this.handleShiftLeft} className="primary-blued">
              <FontAwesomeIcon icon="chevron-left" />
            </Button>
            <br />
            <Button size="sm" className="mt-2 primary-blued realign" onClick={this.handleRotate} data-rotate="left">
              <FontAwesomeIcon icon="redo" />
            </Button>
            <br />
            <Button size="sm" className="my-2 primary-blued realign" onClick={this.handleRotate} data-rotate="right">
              <FontAwesomeIcon icon="undo" />
            </Button>
            <br />
            <Button size="sm" onClick={this.handleShiftRight} className="primary-blued">
              <FontAwesomeIcon icon="chevron-right" />
            </Button>
          </div>
          <Stage width="450" height="450">
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
              handleDragMove={this.handleDragMove}
              handleDragMoveOne={this.handleDragMoveOne}
              handleDragMoveTwo={this.handleDragMoveTwo}
            />
          </Stage>
        </Col>
      </Row>
    );
  }
}

export default Dimensions;
