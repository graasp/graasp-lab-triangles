import React, { Component } from 'react';
import { Layer, Shape } from 'react-konva';

class Tri extends Component {
  render() {
    return (
      <Layer>
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(this.props.points[0].x, this.props.points[0].y);
            context.lineTo(this.props.points[1].x, this.props.points[1].y);
            context.lineTo(this.props.points[2].x, this.props.points[2].y);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          fill="white"
          stroke={this.props.color}
          strokeWidth={6}
        />
      </Layer>
    );
  }
}

export default Tri;
