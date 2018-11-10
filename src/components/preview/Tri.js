import React from 'react';
import PropTypes from 'prop-types';
import {
  Circle, Layer, Line, Shape, Text,
} from 'react-konva';

const Tri = ({
  color,
  node,
  points,
  handleDragMove,
  handleDragMoveOne,
  handleDragMoveTwo,
  checkBoundaries,
}) => (
  <Layer>
    <Line points={[0, 25, 1000, 25]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[0, 50, 1000, 50]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[0, 75, 1000, 75]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[0, 100, 1000, 100]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[0, 125, 1000, 125]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[0, 150, 1000, 150]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[0, 175, 1000, 175]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[0, 200, 1000, 200]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[0, 225, 1000, 225]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[0, 250, 1000, 250]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[0, 275, 1000, 275]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[0, 300, 1000, 300]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[0, 325, 1000, 325]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[0, 350, 1000, 350]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[0, 375, 1000, 375]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[0, 400, 1000, 400]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[0, 425, 1000, 425]} stroke="#ced4da" strokeWidth={0.5} />

    <Line points={[0, 0, 0, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[25, 0, 25, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[50, 0, 50, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[75, 0, 75, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[100, 0, 100, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[125, 0, 125, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[150, 0, 150, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[175, 0, 175, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[200, 0, 200, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[225, 0, 225, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[250, 0, 250, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[275, 0, 275, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[300, 0, 300, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[325, 0, 325, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[350, 0, 350, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[375, 0, 375, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[400, 0, 400, 1000]} stroke="#ced4da" strokeWidth={0.5} />
    <Line points={[425, 0, 425, 1000]} stroke="#ced4da" strokeWidth={0.5} />
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
      stroke={color}
      strokeWidth={3}
      opacity={0.5}
    />
    <Circle
      x={points[0].x}
      y={points[0].y}
      radius={5}
      fill={color}
      stroke="#555"
      strokeWidth={0.5}
      shadowBlur={5}
      onDragMove={handleDragMove}
      draggable
      dragBoundFunc={pos => checkBoundaries(pos)}
    />
    <Circle
      x={points[1].x}
      y={points[1].y}
      radius={5}
      fill={color}
      stroke="#555"
      strokeWidth={0.5}
      shadowBlur={5}
      onDragMove={handleDragMoveOne}
      draggable
      dragBoundFunc={pos => checkBoundaries(pos)}
    />
    <Circle
      x={points[2].x}
      y={points[2].y}
      radius={5}
      fill={color}
      stroke="#555"
      strokeWidth={0.5}
      shadowBlur={5}
      onDragMove={handleDragMoveTwo}
      draggable
      dragBoundFunc={pos => checkBoundaries(pos)}
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
  </Layer>
);

Tri.propTypes = {
  color: PropTypes.string.isRequired,
  handleDragMove: PropTypes.func.isRequired,
  checkBoundaries: PropTypes.func.isRequired,
  handleDragMoveOne: PropTypes.func.isRequired,
  handleDragMoveTwo: PropTypes.func.isRequired,
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
