import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Form,
  FormGroup, InputGroup, InputGroupText,
  InputGroupAddon, Input, Label, Table,
} from 'reactstrap';

class FormViews extends Component {
  static propTypes = {
    handlePChange: PropTypes.func.isRequired,
    handleAChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
    node: PropTypes.object.isRequired,
  }

  state = {
    angles: {
      A: 45,
      B: 45,
      C: 90,
    },
    points: [
      { x: 40, y: 40 },
      { x: 200, y: 100 },
      { x: 100, y: 150 },
    ],
  }

  handleAngleChange = (event) => {
    event.preventDefault();
    const { handleAChange } = this.props;
    const { angles } = this.state;
    const { dataset: { angle }, value } = event.target;
    angles[angle] = Number.parseInt(value, 10);
    this.setState({ angles });
    handleAChange(angles);
  }

  handlePointChange = (event) => {
    event.preventDefault();
    if (event.target.value === '') {
      event.target.value = 0;
    }
    const { handlePChange } = this.props;
    const { points } = this.state;
    const { dataset: { index, axis }, value } = event.target;
    const newPoints = [...points];
    newPoints[index][axis] = Number.parseInt(value, 10);
    handlePChange(newPoints);
  }

  render() {
    const { value, node } = this.props;
    const { angles, points } = this.state;
    if (value) {
      return (
        <div className="mt-3">
          <Table borderless>
            <thead>
              <tr>
                <th>
                  Dot
                  {node.A}
                </th>
                <th>
                  Dot
                  {node.B}
                </th>
                <th>
                  Dot
                  {node.C}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>X</InputGroupText>
                    </InputGroupAddon>
                    <Input type="number" min="0" max="250" data-index="0" data-axis="x" value={points[0].x} onChange={this.handlePointChange} />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>X</InputGroupText>
                    </InputGroupAddon>
                    <Input type="number" min="0" max="300" data-index="1" data-axis="x" value={points[1].x} onChange={this.handlePointChange} />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>X</InputGroupText>
                    </InputGroupAddon>
                    <Input type="number" min="0" max="300" data-index="2" data-axis="x" value={points[2].x} onChange={this.handlePointChange} />
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Y</InputGroupText>
                    </InputGroupAddon>
                    <Input type="number" min="0" max="300" data-index="0" data-axis="y" value={points[0].y} onChange={this.handlePointChange} />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Y</InputGroupText>
                    </InputGroupAddon>
                    <Input type="number" min="0" max="300" data-index="1" data-axis="y" value={points[1].y} onChange={this.handlePointChange} />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Y</InputGroupText>
                    </InputGroupAddon>
                    <Input type="number" min="0" max="300" data-index="2" data-axis="y" value={points[2].y} onChange={this.handlePointChange} />
                  </InputGroup>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
    }
    return (
      <Form className="mt-3">
        <FormGroup row>
          <Label sm={3}>
            Angle&nbsp;
            <strong>{node.A}</strong>
          </Label>
          <Col sm={9}>
            <Input name="" data-index="0" type="number" data-angle="A" value={angles.A} onChange={this.handleAngleChange} placeholder="Angle A value" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={3}>
            Angle&nbsp;
            <strong>{node.B}</strong>
          </Label>
          <Col sm={9}>
            <Input name="" data-index="1" type="number" data-angle="B" value={angles.B} onChange={this.handleAngleChange} placeholder="Angle B value" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={3}>
            Angle&nbsp;
            <strong>{node.C}</strong>
          </Label>
          <Col sm={9}>
            <Input name="" data-index="2" type="number" data-angle="C" value={angles.C} onChange={this.handleAngleChange} placeholder="Side C size" />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}


export default FormViews;
