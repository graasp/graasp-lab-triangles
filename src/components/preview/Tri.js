import React from 'react';
import { Layer, Shape } from "react-konva";

const Tri = () => (
  <Layer>
    <Shape
      sceneFunc={(context, shape) => {
        context.beginPath();
        context.moveTo(150, 45);
        context.lineTo(50, 74);
        context.lineTo(100, 200);
        context.closePath();
        // (!) Konva specific method, it is very important
        context.fillStrokeShape(shape);
      }}
      fill="white"
      stroke="blue"
      strokeWidth={4}
    />
  </Layer>
);

export default Tri;
