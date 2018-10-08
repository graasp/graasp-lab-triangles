import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  CardTitle, Col, Row,
} from 'reactstrap';
import { Stage } from 'react-konva';
import Tri from '../preview/Tri';
import FormViews from './FormViews';

class Dimensions extends Component {
  static propTypes = {
    updateDimensions: PropTypes.func.isRequired,
    node: PropTypes.shape({
      A: PropTypes.string.isRequired,
      B: PropTypes.string.isRequired,
      C: PropTypes.string.isRequired,
    }).isRequired,
    color: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: true,
      points: [
        { x: 50, y: 50 },
        { x: 200, y: 100 },
        { x: 100, y: 150 },
      ],
    };
    this.handlePChange = this.handlePChange.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  handlePChange(coordinates) {
    const { updateDimensions } = this.props;
    this.setState({ points: coordinates });
    updateDimensions(coordinates);
  }

  handleView() {
    const { value } = this.state;
    this.setState({ value: !value });
  }

  render() {
    const { points, value } = this.state;
    const { node, color } = this.props;
    return (
      <Row>
        <Col md="6" className="right-border pt-4">
          <CardTitle>
            <span>
              Triangle&nbsp;
              <strong>{`${node.A}${node.B}${node.C}`}</strong>
              &nbsp;
              coordinates
            </span>
          </CardTitle>
          <FormViews
            value={value}
            handlePChange={this.handlePChange}
            node={node}
            points={points}
          />
        </Col>

        <Stage width="300" height="300" className="border-top">
          <Tri
            points={
              [
                { x: points[0].x, y: points[0].y },
                { x: points[1].x, y: points[1].y },
                { x: points[2].x, y: points[2].y },
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
