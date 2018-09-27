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
  }

  state = {
    colors: [
      '00',
      '00',
      '00',
    ],
    points: [
      { x: 40, y: 40 },
      { x: 200, y: 100 },
      { x: 100, y: 150 },
    ],
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const { handleChange } = this.props;
    const { colors } = this.state;
    const { dataset: { index }, value } = event.target;
    const newColors = [...colors];
    newColors[index] = value;
    this.setState({ colors: newColors });
    handleChange(newColors);
  }

  handlePointChange = (event) => {
    event.preventDefault();
    const { handlePChange } = this.props;
    const { points } = this.state;
    const { dataset: { index, axis }, value } = event.target;
    const newPoints = [...points];
    newPoints[index][axis] = Number.parseInt(value, 10);
    handlePChange(newPoints);
  }

  render() {
    const { value, min } = this.props;
    const { colors, points } = this.state;
    if (value) {
      return (
        <div className="mt-3">
          <Table borderless>
            <thead>
              <tr>
                <th>Dot A</th>
                <th>Dot B</th>
                <th>Dot C</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>X</InputGroupText>
                    </InputGroupAddon>
                    <Input type="number" data-index="0" data-axis="x" value={points[0].x} onChange={this.handlePointChange} />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>X</InputGroupText>
                    </InputGroupAddon>
                    <Input type="number" data-index="1" data-axis="x" value={points[1].x} onChange={this.handlePointChange} />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>X</InputGroupText>
                    </InputGroupAddon>
                    <Input type="number" data-index="2" data-axis="x" value={points[2].x} onChange={this.handlePointChange} />
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Y</InputGroupText>
                    </InputGroupAddon>
                    <Input type="number" data-index="0" data-axis="y" value={points[0].y} onChange={this.handlePointChange} />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Y</InputGroupText>
                    </InputGroupAddon>
                    <Input type="number" data-index="1" data-axis="y" value={points[1].y} onChange={this.handlePointChange} />
                  </InputGroup>
                </td>
                <td>
                  <InputGroup>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>Y</InputGroupText>
                    </InputGroupAddon>
                    <Input type="number" data-index="2" data-axis="y" value={points[2].y} onChange={this.handlePointChange} />
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
          <Label sm={2}>Angle A</Label>
          <Col sm={10}>
            <Input name="" data-index="0" type="text" min={min} value={colors[0]} onChange={this.handleInputChange} placeholder="Side A size" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Angle B</Label>
          <Col sm={10}>
            <Input name="" data-index="1" type="text" value={colors[1]} onChange={this.handleInputChange} placeholder="Side B size" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Angle C</Label>
          <Col sm={10}>
            <Input name="" data-index="2" type="text" value={colors[2]} onChange={this.handleInputChange} placeholder="Side C size" />
          </Col>
        </FormGroup>
      </Form>
    );
  }
}


export default FormViews;
