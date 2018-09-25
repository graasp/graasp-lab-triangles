import React from 'react';
import {
  CardTitle, Col, Form,
  FormGroup, Input, Label, Row,
} from 'reactstrap';
import { Stage } from "react-konva";
import Tri from '../preview/Tri';

const Dimensions = () => (
  <Row className="px-5">
    <Col md="6" className="right-border">
      <CardTitle>
        <span>Triangle A dimensions here</span>
      </CardTitle>
      <div className="clearfix">
        <span className="float-left">
          <input type="radio" name="triangleAsize" />
          &nbsp;Use Sizes
        </span>
        <span className="float-right">
          <input type="radio" name="triangleAsize" />
          &nbsp;Use Angles
        </span>
      </div>
      <Form>
        <FormGroup row>
          <Label sm={2}>Side A</Label>
          <Col sm={10}>
            <Input type="number" min="0" placeholder="Side A size" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Side B</Label>
          <Col sm={10}>
            <Input type="number" min="0" placeholder="Side B size" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Side C</Label>
          <Col sm={10}>
            <Input type="number" min="0" placeholder="Side C size" />
          </Col>
        </FormGroup>
      </Form>
    </Col>
    
    <Stage width="300" height="300">
      <Tri
        points={[{ x: 150, y: 500 }, { x: 500, y: 250 }, { x: 300, y: 250 }]}
        color="black"
      />
    </Stage>
  </Row>
);

export default Dimensions;
