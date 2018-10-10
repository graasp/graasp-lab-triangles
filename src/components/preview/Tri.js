import React from 'react';
import PropTypes from 'prop-types';
import { Layer, Shape, Text } from 'react-konva';

const Tri = ({ color, node, points }) => (
  <Layer>
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
      rotation={5}
    />
    <Text
      x={points[0].x - 30}
      y={points[0].y + 20}
      text={node.A}
      fontSize={20}
      fill={color}
    />
    <Text
      x={points[1].x + 5}
      y={points[1].y - 10}
      text={node.B}
      fontSize={20}
      fill={color}
    />
    <Text
      x={points[2].x - 20}
      y={points[2].y + 20}
      text={node.C}
      fontSize={20}
      fill={color}
    />
  </Layer>
);

Tri.propTypes = {
  color: PropTypes.string.isRequired,
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
