import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Form,
  FormGroup, InputGroup, InputGroupText,
  InputGroupAddon, Input, Label, Table,
} from 'reactstrap';

class FormViews extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    handlePChange: PropTypes.func.isRequired,
    handleAChange: PropTypes.func.isRequired,
  }

  state = {
    colors: [
      '00',
      '00',
      '00',
    ],
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

  handleInputChange = (event) => {
    event.preventDefault();
    console.log('Input is changing hehe', event.target.value);
    const { handleChange } = this.props;
    const { colors } = this.state;
    const { dataset: { index }, value } = event.target;
    const newColors = [...colors];
    newColors[index] = value;
    this.setState({ colors: newColors });
    handleChange(newColors);
  }

  handleAngleChange = (event) => {
    event.preventDefault();
    console.log('Input is changing hehe', event.target.value);
    const { handleAChange } = this.props;
    const { angles } = this.state;
    const { dataset: { index }, value } = event.target;
    const newAngles = [...angles];
    newAngles[index] = value;
    this.setState({ angles: newAngles });
    handleAChange(newAngles);
  }

  handlePointChange = (event) => {
    event.preventDefault();
    if (event.target.value === '') {
      event.target.value = 0
    }
    const { handlePChange } = this.props;
    const { points } = this.state;
    const { dataset: { index, axis }, value } = event.target;
    const newPoints = [...points];
    newPoints[index][axis] = Number.parseInt(value, 10);
    handlePChange(newPoints);
  }

  render() {
    const { value, min, node } = this.props;
    const { angles, colors, points } = this.state;
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
            <Input name="" data-index="0" type="text" min={min} value={angles.A} onChange={this.handleAngleChange} placeholder="Side A size" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={3}>
            Angle&nbsp;
            <strong>{node.B}</strong>
          </Label>
          <Col sm={9}>
            <Input name="" data-index="1" type="text" value={angles.B} onChange={this.handleAngleChange} placeholder="Side B size" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={3}>
            Angle&nbsp;
            <strong>{node.C}</strong>
          </Label>
          <Col sm={9}>
            <Input name="" data-index="2" type="text" value={angles.C} onChange={this.handleAngleChange} placeholder="Side C size" />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}


export default FormViews;
