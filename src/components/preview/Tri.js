import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Circle, Shape, Text,
} from 'react-konva';

const Tri = ({
  color,
  node,
  stroke,
  points,
  handleDragMove,
  handleDragMoveOne,
  handleDragMoveTwo,
  checkBoundaries,
  handleMouseEnter,
  handleMouseLeave,
  strokeWidthOne,
  strokeWidthTwo,
  strokeWidthThree,
  radiusOne,
}) => (
  <Fragment>
    <Shape
      sceneFunc={(context, shape) => {
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        context.lineTo(points[1].x, points[1].y);
        context.lineTo(points[2].x, points[2].y);
        context.closePath();
        context.fillStrokeShape(shape);
      }}
      fill="rgb(232, 240, 249)"
      stroke={stroke}
      strokeWidth={3}
      opacity={0.5}
    />
    <Circle
      x={points[0].x}
      y={points[0].y}
      radius={radiusOne}
      fill={color}
      stroke="#555"
      strokeWidth={strokeWidthOne}
      shadowBlur={5}
      onDragMove={handleDragMove}
      draggable
      dragBoundFunc={pos => checkBoundaries(pos)}
      onMouseEnter={e => handleMouseEnter(e, 'circleOne')}
      onMouseLeave={e => handleMouseLeave(e, 'circleOne')}
    />
    <Circle
      x={points[1].x}
      y={points[1].y}
      radius={5}
      fill={color}
      stroke="#555"
      strokeWidth={strokeWidthTwo}
      shadowBlur={5}
      onDragMove={handleDragMoveOne}
      draggable
      dragBoundFunc={pos => checkBoundaries(pos)}
      onMouseEnter={e => handleMouseEnter(e, 'circleTwo')}
      onMouseLeave={e => handleMouseLeave(e, 'circleTwo')}
    />
    <Circle
      x={points[2].x}
      y={points[2].y}
      radius={5}
      fill={color}
      stroke="#555"
      strokeWidth={strokeWidthThree}
      shadowBlur={5}
      onDragMove={handleDragMoveTwo}
      draggable
      dragBoundFunc={pos => checkBoundaries(pos)}
      onMouseEnter={e => handleMouseEnter(e, 'circleThree')}
      onMouseLeave={e => handleMouseLeave(e, 'circleThree')}
    />
    <Text
      x={points[0].x + 2}
      y={points[0].y - 30}
      text={node.A}
      fontSize={20}
      fill={color}
    />
    <Text
      x={points[1].x + 2}
      y={points[1].y - 30}
      text={node.B}
      fontSize={20}
      fill={color}
    />
    <Text
      x={points[2].x + 2}
      y={points[2].y - 30}
      text={node.C}
      fontSize={20}
      fill={color}
    />
  </Fragment>
);

Tri.propTypes = {
  color: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
  radiusOne: PropTypes.number.isRequired,
  strokeWidthOne: PropTypes.number.isRequired,
  strokeWidthTwo: PropTypes.number.isRequired,
  strokeWidthThree: PropTypes.number.isRequired,
  handleDragMove: PropTypes.func.isRequired,
  checkBoundaries: PropTypes.func.isRequired,
  handleDragMoveOne: PropTypes.func.isRequired,
  handleDragMoveTwo: PropTypes.func.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
  node: PropTypes.shape({
    A: PropTypes.string.isRequired,
    B: PropTypes.string.isRequired,
    C: PropTypes.string.isRequired,
  }).isRequired,
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })).isRequired,
};

export default Tri;
