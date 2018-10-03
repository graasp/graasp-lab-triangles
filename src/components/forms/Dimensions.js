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
    name: PropTypes.string.isRequired,
    node: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
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
    this.setState({ angles });
    updateAngles(angles);
  }

  handleView() {
    const { value } = this.state;
    this.setState({ value: !value });
  }

  render() {
    const { point, value } = this.state;
    const { name, node, color } = this.props;
    return (
      <Row className="px-5">
        <Col md="6" className="right-border">
          <CardTitle>
            <span>
              Triangle&nbsp;
              <strong>{`${node.A}${node.B}${node.C}`}</strong>
              &nbsp;
              dimensions here
            </span>
          </CardTitle>
          <div className="clearfix">
            <span className="float-left">
              <Input name={`${name}-choice`} type="radio" checked={value} onChange={this.handleView} />
              &nbsp;Use Sides
            </span>
            <span className="float-right">
              <Input name={`${name}-choice`} type="radio" onChange={this.handleView} />
              &nbsp;Use Angles
            </span>
          </div>
          <FormViews
            value={value}
            handlePChange={this.handlePChange}
            handleAChange={this.handleAChange}
            node={node}
          />
        </Col>

        <Stage width="300" height="300">
          <Tri
            points={
              [
                { x: point[0].x, y: point[0].y },
                { x: point[1].x, y: point[1].y },
                { x: point[2].x, y: point[2].y },
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
