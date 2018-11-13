import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  CardTitle,
  Col,
  Row,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Stage } from 'react-konva';
import Tri from '../preview/Tri';
import FormViews from './FormViews';
import '@fortawesome/fontawesome-free-solid';
import './Dimensions.css';

class Dimensions extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
    updateDimensions: PropTypes.func.isRequired,
    clax: PropTypes.string.isRequired,
    node: PropTypes.shape({
      A: PropTypes.string.isRequired,
      B: PropTypes.string.isRequired,
      C: PropTypes.string.isRequired,
    }).isRequired,
    color: PropTypes.string.isRequired,
    triangles: PropTypes.arrayOf(PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    })).isRequired,
    message: PropTypes.bool,
  };

  static defaultProps = {
    message: false,
  };

  handleShift = (e, stepX, stepY) => {
    const { triangles } = this.props;
    const newPoints = [...triangles];
    const coordinates = newPoints.map(({ x, y }) => ({
      x: x + stepX,
      y: y + stepY,
    }));
    this.handlePChange(coordinates);
  };

  handleRotate = (orientation) => {
    const { triangles } = this.props;
    const newPoints = [...triangles];
    const Ox = (newPoints[0].x + newPoints[1].x + newPoints[2].x) / 3;
    const Oy = (newPoints[0].y + newPoints[1].y + newPoints[2].y) / 3;
    const radians = orientation === 'ccw' ? (Math.PI / 180) * 90 : (Math.PI / 180) * (-90);
    const cos = Math.cos(radians);
    const sin = Math.sin(radians);
    const coordinates = newPoints.map(({ x, y }) => {
      const nx = (cos * (x - Ox)) + (sin * (y - Oy)) + Ox;
      const ny = (cos * (y - Oy)) - (sin * (x - Ox)) + Oy;
      return {
        x: Math.round(nx),
        y: Math.round(ny),
      };
    });
    this.handlePChange(coordinates);
  };

  handleDragMove = (e, i) => {
    const { triangles } = this.props;
    const newPoints = [...triangles];
    newPoints[i].x = e.target.x();
    newPoints[i].y = e.target.y();
    this.handlePChange(newPoints);
  };

  handlePChange = (coordinates) => {
    const { updateDimensions } = this.props;
    let gridOverflow = false;
    coordinates.forEach(({ x, y }) => {
      if (x < 0 || x > 435 || y < 0 || y > 435) {
        gridOverflow = true;
      }
    });
    if (!gridOverflow) {
      updateDimensions(coordinates);
    }
  };

  checkBoundaries = ({ x, y }) => {
    let newX = x < 0 ? 0 : x;
    newX = x >= 435 ? 435 : newX;
    let newY = y < 0 ? 0 : y;
    newY = y >= 435 ? 435 : newY;
    return {
      x: newX,
      y: newY,
    };
  };

  render() {
    const {
      node,
      color,
      t,
      clax,
      message,
      triangles,
    } = this.props;
    return (
      <div className="Dimensions">
        <Row className={clax}>
          <Col className="right-border pt-4">
            <Row>
              <Col>
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
                  points={triangles}
                  t={t}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <Button
                      size="sm"
                      onClick={e => this.handleShift(e, 0, -20)}
                      className="primary-blued"
                    >
                      <FontAwesomeIcon
                        icon="chevron-up"
                        size="sm"
                        fixedWidth
                      />
                    </Button>
                    <Button
                      size="sm"
                      onClick={e => this.handleShift(e, 0, 20)}
                      className="primary-blued"
                    >
                      <FontAwesomeIcon
                        icon="chevron-up"
                        size="sm"
                        fixedWidth
                        rotation={180}
                      />
                    </Button>
                    <Button
                      size="sm"
                      onClick={e => this.handleShift(e, -20, 0)}
                      className="primary-blued"
                    >
                      <FontAwesomeIcon
                        icon="chevron-up"
                        size="sm"
                        fixedWidth
                        rotation={270}
                      />
                    </Button>
                    <Button
                      size="sm"
                      onClick={e => this.handleShift(e, 20, 0)}
                      className="primary-blued"
                    >
                      <FontAwesomeIcon
                        icon="chevron-up"
                        size="sm"
                        fixedWidth
                        rotation={90}
                      />
                    </Button>
                    <Button
                      size="sm"
                      className="primary-blued"
                      onClick={e => this.handleRotate('cw', e)}
                    >
                      <FontAwesomeIcon
                        icon="redo"
                        size="sm"
                        fixedWidth
                      />
                    </Button>
                    <Button
                      size="sm"
                      className="primary-blued"
                      onClick={e => this.handleRotate('ccw', e)}
                    >
                      <FontAwesomeIcon icon="undo" size="sm" fixedWidth />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col>
            { message && <h5>{t('drag')}</h5>}
            <Stage width="450" height="450">
              <Tri
                points={
                  [
                    { x: triangles[0].x, y: triangles[0].y },
                    { x: triangles[1].x, y: triangles[1].y },
                    { x: triangles[2].x, y: triangles[2].y },
                  ]
                }
                color={color}
                node={node}
                handleDragMove={e => this.handleDragMove(e, 0)}
                handleDragMoveOne={e => this.handleDragMove(e, 1)}
                handleDragMoveTwo={e => this.handleDragMove(e, 2)}
                checkBoundaries={this.checkBoundaries}
              />
            </Stage>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dimensions;
