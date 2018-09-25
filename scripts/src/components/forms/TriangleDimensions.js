import React from 'react';
import {
  CardText, CardTitle,
  Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import TriangleView from '../preview/TriangleView';

const TriangleADimensions = () => (
  <Row className="px-5">
    <Col md="6" className="right-border">
      <CardTitle>
        <span>Triangle A dimensions here</span>
      </CardTitle>
      <div className="clearfix">
        <span className="float-left">
          <input type="radio" name="triangleAsize" checked />
          &nbsp;Use Sizes
        </span>
        <span className="float-right">
          <input type="radio" name="triangleAsize" />
          &nbsp;Use Angles
        </span>
      </div>
      <CardText className="py-3">
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
      </CardText>
    </Col>
    <TriangleView />
  </Row>
);

export default TriangleADimensions;
