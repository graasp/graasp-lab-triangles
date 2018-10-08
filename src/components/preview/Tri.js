import React from 'react';
import PropTypes from 'prop-types';
import { Layer, Shape } from 'react-konva';

const Tri = ({ color, points }) => (
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
      fill="#ffffcf"
      stroke={color}
      strokeWidth={3}
    />
  </Layer>
);

Tri.propTypes = {
  color: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  })).isRequired,
};

export default Tri;
