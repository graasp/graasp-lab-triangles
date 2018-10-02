import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CardTitle, Col,
  Input, Row,
} from 'reactstrap';
import { Stage } from 'react-konva';
import Tri from '../preview/Tri';
import FormViews from './FormViews';


class Dimensions extends Component {
  static propTypes = {
    updateDimensions: PropTypes.func.isRequired,
    updateAngles: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: true,
      point: [
        { x: 50, y: 50 },
        { x: 200, y: 100 },
        { x: 100, y: 150 },
      ],
    };
    this.handleAChange = this.handleAChange.bind(this);
    this.handlePChange = this.handlePChange.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  handlePChange(coordinates) {
    const { updateDimensions } = this.props;
    this.setState({ point: coordinates });
    updateDimensions(coordinates);
  }

  handleAChange(angles) {
    const { updateAngles } = this.props;
    this.setState({ angles: angles });
    updateAngles(angles);
  }

  handleView() {
    this.setState({ value: !this.state.value })
  }

  render() {
    const { name, node, color } = this.props;
    return (
      <Row className="px-5">
        <Col md="6" className="right-border">
          <CardTitle>
            <span>Triangle <strong>{`${node.A}${node.B}${node.C}`}</strong> dimensions here</span>
          </CardTitle>
          <div className="clearfix">
            <span className="float-left">
              <Input name={`${name}-choice`} type="radio" checked={this.state.value} onChange={this.handleView} />
              &nbsp;Use Sides
            </span>
            <span className="float-right">
              <Input name={`${name}-choice`} type="radio" onChange={this.handleView} />
              &nbsp;Use Angles
            </span>
          </div>
          <FormViews
            value={this.state.value}
            handlePChange={this.handlePChange}
            handleAChange={this.handleAChange}
            node={node}
          />
        </Col>

        <Stage width="300" height="300">
          <Tri
            points={
              [
                { x: this.state.point[0].x, y: this.state.point[0].y },
                { x: this.state.point[1].x, y: this.state.point[1].y },
                { x: this.state.point[2].x, y: this.state.point[2].y }
              ]
            }
            color={color}
          />
        </Stage>
      </Row>
    );
  }
}
export default Dimensions;
