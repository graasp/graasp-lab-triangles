import React, { Component } from 'react';
import {
  CardTitle, Col,
  Input, Row,
} from 'reactstrap';
import { Stage } from 'react-konva';
import Tri from '../preview/Tri';
import FormViews from './FormViews';


class Dimensions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: true,
      color: '#555555',
      point: [
        { x: 50, y: 50 },
        { x: 200, y: 100 },
        { x: 100, y: 150 },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    console.log('handle change called', e.target.value);
    this.setState({ color: e.target.value });
  }

  handleView(e, { value }) {
    this.setState({ value: value })
  }

  render() {
    const { name } = this.props;
    return (
      <Row className="px-5">
        <Col md="6" className="right-border">
          <CardTitle>
            <span>Triangle A dimensions here</span>
          </CardTitle>
          <div className="clearfix">
            <span className="float-left">
              <Input name={`${name}-choice`} type="radio" checked={this.state.value} onChange={this.handleView} value="useSize" />
              &nbsp;Use Sides
            </span>
            <span className="float-right">
              <Input name={`${name}-choice`} type="radio" onClick={this.handleView} value="useAngle" />
              &nbsp;Use Angles
            </span>
          </div>
          <FormViews
            value={this.state.value}
            handleChange={this.handleChange}
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
            color={this.state.color}

          />
        </Stage>
      </Row>
    );
  }
}
export default Dimensions;
