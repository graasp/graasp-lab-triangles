import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Layer,
  Line,
  Stage,
  useStrictMode,
} from 'react-konva';
import { connect } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import AppState from '../config/AppState';
import Tri from './preview/Tri';
import SimulationButtons from './common/SimulationButtons';
import { toggleDragMode } from '../actions';

class Visualizer extends Component {
  state = AppState;

  componentDidMount() {
    useStrictMode(true);
  }

  renderVerticalGrid = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const { blockSnapSize } = this.state;
    const lines = [];
    const grouped = width / blockSnapSize;
    for (let i = 0; i < grouped; i += 1) {
      lines.push(
        <Line
          key={i}
          points={[Math.round(i * blockSnapSize) + 1, 0, Math.round(i * blockSnapSize) + 1, height]}
          stroke="#CCC"
          strokeWidth={1}
        />,
      );
    }
    return lines;
  }

  renderHorizontalGrid = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const { blockSnapSize } = this.state;
    const lines = [];
    const grouped = height / blockSnapSize;
    for (let j = 0; j < grouped; j += 1) {
      lines.push(
        <Line
          key={j}
          points={[0, Math.round(j * blockSnapSize), width, Math.round(j * blockSnapSize)]}
          stroke="#CCC"
          strokeWidth={1}
        />,
      );
    }
    return lines;
  }

  handleDragMove = (e, i, kind) => {
    const { triOne, triTwo, blockSnapSize } = this.state;
    const currentTriangle = kind === 'triangleOne' ? triOne : triTwo;
    const newPoints = [...currentTriangle];
    newPoints[i].x = Math.round(e.target.x() / blockSnapSize) * blockSnapSize;
    newPoints[i].y = Math.round(e.target.y() / blockSnapSize) * blockSnapSize;
    this.handlePChange(newPoints, kind);
    const { dispatchisDragging } = this.props;
    dispatchisDragging(true);
  };

  handlePChange = (coordinates, kind) => {
    let gridOverflow = false;
    const { dispatchisDragging } = this.props;
    dispatchisDragging(false);
    coordinates.forEach(({ x, y }) => {
      if (x < 0 || x > 1400 || y < 0 || y > 1200) {
        gridOverflow = true;
      }
    });
    if (!gridOverflow) {
      if (kind === 'triangleOne') { this.setState({ triOne: coordinates }); }
      if (kind === 'triangleTwo') { this.setState({ triTwo: coordinates }); }
    }
  };

  checkBoundaries = ({ x, y }) => {
    let newX = x < 0 ? 0 : x;
    newX = x >= 1400 ? 1400 : newX;
    let newY = y < 0 ? 0 : y;
    newY = y >= 1200 ? 1200 : newY;
    return {
      x: newX,
      y: newY,
    };
  };

  // called when the mous hovers any circle
  handleMouseEnter = (e, circleKind) => {
    document.body.style.cursor = 'pointer';
    if (circleKind === 'circleOne') this.setState({ isMouseInsideCircleOne: true });
    if (circleKind === 'circleTwo') this.setState({ isMouseInsideCircleTwo: true });
    if (circleKind === 'circleThree') this.setState({ isMouseInsideCircleThree: true });
  }

  // called when the mous leaves any circle
  handleMouseLeave = (e, circleKind) => {
    document.body.style.cursor = 'default';
    if (circleKind === 'circleOne') this.setState({ isMouseInsideCircleOne: false });
    if (circleKind === 'circleTwo') this.setState({ isMouseInsideCircleTwo: false });
    if (circleKind === 'circleThree') this.setState({ isMouseInsideCircleThree: false });
  }


  render() {
    const {
      triOne, nodeOne, colorOne,
      triTwo, nodeTwo, colorTwo,
      isMouseInsideCircleOne, isMouseInsideCircleTwo, isMouseInsideCircleThree,
    } = this.state;
    return (
      <div className="description-component">
        <SimulationButtons triangles={{ triOne, triTwo }} />

        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            {this.renderVerticalGrid()}
            {this.renderHorizontalGrid()}
            <Tri
              points={
                [
                  { x: triOne[0].x, y: triOne[0].y },
                  { x: triOne[1].x, y: triOne[1].y },
                  { x: triOne[2].x, y: triOne[2].y },
                ]
              }
              color={colorOne}
              stroke="#a05050"
              node={nodeOne}
              radiusOne={isMouseInsideCircleOne ? 10 : 5}
              radiusTwo={isMouseInsideCircleTwo ? 10 : 5}
              radiusThree={isMouseInsideCircleThree ? 10 : 5}
              strokeWidthOne={isMouseInsideCircleOne ? 2 : 0.5}
              strokeWidthTwo={isMouseInsideCircleTwo ? 2 : 0.5}
              strokeWidthThree={isMouseInsideCircleThree ? 2 : 0.5}
              handleDragMove={e => this.handleDragMove(e, 0, 'triangleOne')}
              handleDragMoveOne={e => this.handleDragMove(e, 1, 'triangleOne')}
              handleDragMoveTwo={e => this.handleDragMove(e, 2, 'triangleOne')}
              checkBoundaries={this.checkBoundaries}
              handleMouseLeave={this.handleMouseLeave}
              handleMouseEnter={this.handleMouseEnter}
            />
            <Tri
              points={
                [
                  { x: triTwo[0].x, y: triTwo[0].y },
                  { x: triTwo[1].x, y: triTwo[1].y },
                  { x: triTwo[2].x, y: triTwo[2].y },
                ]
              }
              color={colorTwo}
              stroke="rgb(0, 150, 136)"
              node={nodeTwo}
              radiusOne={isMouseInsideCircleOne ? 10 : 5}
              radiusTwo={isMouseInsideCircleTwo ? 10 : 5}
              radiusThree={isMouseInsideCircleThree ? 10 : 5}
              strokeWidthOne={isMouseInsideCircleOne ? 2 : 0.5}
              strokeWidthTwo={isMouseInsideCircleTwo ? 2 : 0.5}
              strokeWidthThree={isMouseInsideCircleThree ? 2 : 0.5}
              handleDragMove={e => this.handleDragMove(e, 0, 'triangleTwo')}
              handleDragMoveOne={e => this.handleDragMove(e, 1, 'triangleTwo')}
              handleDragMoveTwo={e => this.handleDragMove(e, 2, 'triangleTwo')}
              checkBoundaries={this.checkBoundaries}
              handleMouseLeave={this.handleMouseLeave}
              handleMouseEnter={this.handleMouseEnter}
            />
          </Layer>
        </Stage>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  dragMode: state.simulation.dragMode,
});

const mapDispatchToProps = {
  dispatchisDragging: toggleDragMode,
};

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Visualizer);

Visualizer.propTypes = {
  dispatchisDragging: PropTypes.func.isRequired,
};

export default ConnectedComponent;
